import { FastifyInstance } from 'fastify';
import { Connection } from 'typeorm';

import UsersController from '../../../presentation/controllers/UsersController';

const userRouter = async (fastify: FastifyInstance, connection: Connection): Promise<void> => {
  // Get all users
  fastify.get('/users', () => {
    const controller: UsersController = new UsersController();
    return controller.fetchAll(connection);
  });
};

export default userRouter;
