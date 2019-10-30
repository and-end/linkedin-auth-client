import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { inspect } from 'util';
import fetch from 'node-fetch';

import LinkedInAuthClient from '../dist';

const linkedInAuthClient = new LinkedInAuthClient({ fetchProvider: fetch });

linkedInAuthClient.init({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
  scope: ['r_liteprofile', 'r_emailaddress'],
  response_type: 'code',
  grant_type: 'authorization_code'
});

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

server.get('/', async (request, reply) => {
  reply.redirect(linkedInAuthClient.getAuthorizationUrl());
});

server.get('/auth', async (request, reply) => {
  const data = await linkedInAuthClient.getAccessToken(request.query.code);

  reply
    .code(200)
    .header('Content-Type', 'text/html')
    .send(`<h1>Success</h1><pre>${inspect(data)}</pre>`);
});

server.listen(8000);
