const whatsUpWebHookController = require('../controllers/whatsAppWebHooks.controller')

module.exports = (fastify, _opts, done) => {
  fastify.route({
    method: 'POST',
    url: '/webhooks/message',
    handler: whatsUpWebHookController.messages,
    preHandler: [],
  })

  fastify.route({
    method: 'POST',
    url: '/webhooks/users',
    handler: whatsUpWebHookController.users,
    preHandler: [],
  })

  done()
}

