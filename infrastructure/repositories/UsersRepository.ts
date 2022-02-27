import { Connection, EntityRepository } from 'typeorm';

import IUsersRepository from '../../application/ports/UsersRepository';
import UserDomain from '../../domains/User';
import Users from '../dao/Users.entity';

// Data Access
@EntityRepository(Users)
export default class UsersRepository implements IUsersRepository {
  async findAll(connection: Connection): Promise<UserDomain[]> {
    try {
      const users = await connection.getRepository(Users).find();
      console.log(users)
      // model convert to domain
      return users.map((user) => {
        return new UserDomain(
          Number(user.id),
          user.name,
          user.email,
          user.password,
          String(user.created_at),
          String(user.updated_at),
        );
      });
    } catch (e) {
      console.log(e)
      throw e;
    }
  }
}
