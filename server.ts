import dotenv from 'dotenv';
import Fastify from 'fastify';
import cookie from 'fastify-cookie';
import Cors from 'fastify-cors';
import Sensible from 'fastify-sensible';
import sourceMapSupport from 'source-map-support';
import { createConnection, Connection } from 'typeorm';
import UnderPressure from 'under-pressure';

import userRouter from './infrastructure/routes/users';

dotenv.config();

(async (): Promise<void> => {
  const fastify = Fastify({
    logger: true,
  });

  sourceMapSupport.install();

  const connection: Connection = await createConnection();

  fastify.register(cookie);

  fastify.register(Sensible);

  fastify.register(UnderPressure, {
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: 1000000000,
    maxRssBytes: 1000000000,
    maxEventLoopUtilization: 0.98,
  });

  fastify.register(Cors, {
    origin: false,
  });

  userRouter(fastify, connection);

  fastify.listen(process.env.PORT, (err, address) => {
    if (err) throw err;
    fastify.log.info(`server listening on ${address}`);
  });
})();
