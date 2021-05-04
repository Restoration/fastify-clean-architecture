import UsersController from '../../controllers/UsersController';

const controller = new UsersController();

module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return controller.fetchAll();
  });
};
