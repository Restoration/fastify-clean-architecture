import User from '../../models/User';

// Data Access Interface
export default interface IUsersRepository {
  findAll: () => Promise<User[]>
};
