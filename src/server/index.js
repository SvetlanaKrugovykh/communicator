const Fastify = require('fastify')
require('dotenv').config()

const app = Fastify({
  trustProxy: true
})

app.register(require('@fastify/cors'), {})

app.register(require('./routes/whatsAppWebHooks.route'), {})


module.exports = { app }

