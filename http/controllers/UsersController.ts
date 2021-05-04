import UsersRepository from '../../core/repositories/UsersRepository';
import UsersUseCase from '../../core/usecases/UsersUseCase';
import IUsersUseCase from '../../core/interfaces/usecases/UsersUseCase';
import User from '../../core/domains/User';

// Controller
export default class UsersController {
  private readonly useCase: IUsersUseCase;

  constructor() {
    this.useCase = new UsersUseCase(new UsersRepository());
  }

  async fetchAll(): Promise<User[]> {
    return await this.useCase.fetchUsers();
  };
};
