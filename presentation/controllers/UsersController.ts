import { Connection } from 'typeorm';

import UsersUseCase, { IUsersUseCase } from '../../application/usecases/UsersUseCase';
import User from '../../domains/User';
import UsersRepository from '../../infrastructure/repositories/UsersRepository';

interface IUserController {
  fetchAll(connection: Connection): Promise<User[]>;
}

// Controller
export default class UsersController implements IUserController {
  private readonly useCase: IUsersUseCase;

  constructor() {
    this.useCase = new UsersUseCase(new UsersRepository());
  }

  async fetchAll(connection: Connection): Promise<User[]> {
    return await this.useCase.fetchUsers(connection);
  }
}
