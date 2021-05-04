import User from '../../domains/User';

// Input Boundary
export default interface IUsersUseCase {
  fetchUsers: () => Promise<User[]>
}
