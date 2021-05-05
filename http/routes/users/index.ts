import UsersController from '../../controllers/UsersController';

export default class UsersRoute {
  
  initRoutes(server: any, opts: any, next: any): void  {
    server.get('/users', this.getHandler);
    next();
  }

  getHandler(req: any, reply: any) {
    const controller: UsersController = new UsersController();
    reply.header('Content-Type', 'application/json').code(200);
    reply.send(controller.fetchAll());
  }
}