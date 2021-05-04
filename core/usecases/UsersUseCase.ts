import User from '../domains/User';
import UsersRepository from '../repositories/UsersRepository';
import IUsersUseCase from '../interfaces/usecases/UsersUseCase';

// Use Case Interactor
// model convert to domain
export default class UsersUseCase implements IUsersUseCase {
  readonly usersRepository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.usersRepository = repository;
  }

  async fetchUsers(): Promise<User[]> {
    const users = await this.usersRepository.findAll();
    return users.map((user) => {
      return new User(Number(user.id), user.name, user.email, user.password, String(user.created_at), String(user.updated_at));
    });
  }
}
