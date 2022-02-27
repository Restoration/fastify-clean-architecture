import { Connection } from 'typeorm';

import User from '../../domains/User';
import UsersRepository from '../../infrastructure/repositories/UsersRepository';

// Input Boundary
export interface IUsersUseCase {
  fetchUsers: (connection: Connection) => Promise<User[]>;
}

// Use Case Interactor
export default class UsersUseCase implements IUsersUseCase {
  readonly usersRepository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.usersRepository = repository;
  }

  async fetchUsers(connection: Connection): Promise<User[]> {
    return await this.usersRepository.findAll(connection);
  }
}
