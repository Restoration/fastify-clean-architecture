import { Connection } from 'typeorm';

import UserDomain from '../../domains/User';

// Data Access Port
export default interface IUsersRepository {
  findAll: (connection: Connection) => Promise<UserDomain[]>;
}
