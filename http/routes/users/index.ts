import UsersController from '../../controllers/UsersController';

async function userRouter (fastify) {

  // Get all users
  fastify.get('/users', () => {
    const controller: UsersController = new UsersController();
    return controller.fetchAll();
  });
}

export default userRouter;