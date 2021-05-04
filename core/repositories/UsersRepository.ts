import User from '../models/User';
import { EntityRepository, getRepository } from 'typeorm';
import IUsersRepository from '../interfaces/repositories/UsersRepository';

// Data Access
@EntityRepository(User)
export default class UsersRepository implements IUsersRepository {
  async findAll(): Promise<User[]> {
    const repository = getRepository(User);
    return repository.find();
  }
}
