import UsersRoute from './users';

const Router = (server: any): void => {
  const users = new UsersRoute();

  server.register([
    users.initRoutes
  ]);
};

export default Router;