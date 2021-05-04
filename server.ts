import Fastify from 'fastify';
import Sensible from 'fastify-sensible';
import Env from 'fastify-env';
import Cors from 'fastify-cors';
import UnderPressure from 'under-pressure';
import S from 'fluent-json-schema';
import serveStatic from 'serve-static';
import cookie from 'fastify-cookie';

const PORT = 3000;

const fastify = Fastify({
  logger: true
});

// @ts-expect-error
fastify.use('/', serveStatic('assets', { index: ['index.html'] }));
fastify.register(cookie);

fastify.register(Env, {
  schema: S.object()
    .prop('NODE_ENV', S.string().required())
    .valueOf()
});

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

fastify.listen(PORT, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
