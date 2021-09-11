import Fastify from 'fastify';
import Sensible from 'fastify-sensible';
import Cors from 'fastify-cors';
import UnderPressure from 'under-pressure';
import cookie from 'fastify-cookie';
import userRouter from './http/routes/users';

const PORT = 3000;

const fastify = Fastify({
  logger: true
});

class Server {
  constructor() {
    this.init();
  }

  public init(): void {
    fastify.register(cookie);

    fastify.register(Sensible);
    
    fastify.register(UnderPressure, {
      maxEventLoopDelay: 1000,
      maxHeapUsedBytes: 1000000000,
      maxRssBytes: 1000000000,
      maxEventLoopUtilization: 0.98
    });
    
    fastify.register(Cors, {
      origin: false
    });
    
    userRouter(fastify);

    fastify.listen(PORT, (err, address) => {
      if (err) throw err;
      fastify.log.info(`server listening on ${address}`);
    });    
  }
}

new Server();