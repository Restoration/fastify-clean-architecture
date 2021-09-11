import UserDomain from '../../domains/User';

// Data Access Interface
export default interface IUsersRepository {
  findAll: () => Promise<UserDomain[]>
};
