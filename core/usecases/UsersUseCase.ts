import User from '../domains/User';
import UsersRepository from '../repositories/UsersRepository';
import IUsersUseCase from '../interfaces/usecases/UsersUseCase';

// Use Case Interactor
export default class UsersUseCase implements IUsersUseCase {
  readonly usersRepository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.usersRepository = repository;
  }

  async fetchUsers(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }
}
