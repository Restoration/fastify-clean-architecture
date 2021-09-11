import User from '../models/User';
import UserDomain from '../domains/User';
import { EntityRepository, getRepository } from 'typeorm';
import IUsersRepository from '../interfaces/repositories/UsersRepository';

// Data Access
@EntityRepository(User)
export default class UsersRepository implements IUsersRepository {
  async findAll(): Promise<UserDomain[]> {
    const repository = getRepository(User);
    // model convert to domain
    const users = await repository.find();
    return users.map((user) => {
      return new UserDomain(Number(user.id), user.name, user.email, user.password, String(user.created_at), String(user.updated_at));
    });
  }
}
