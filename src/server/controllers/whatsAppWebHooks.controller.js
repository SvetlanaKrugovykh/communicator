const HttpError = require('http-errors')
const whatsAppService = require('../services/whatsApp.service')



module.exports.messages = async function (request, _reply) {
  try {
    const message = request.body

    const response = await whatsAppService.sendMessage(message)

    if (!response) {
      throw new HttpError[501]('Command execution failed')
    }
    return {
      message: `done `
    }
  } catch (error) {
    throw new HttpError[500](error.message)
  }
}

module.exports.users = async function (request, _reply) {
  try {
    const userData = request.body

    const response = await whatsAppService.manageUsers(userData)

    if (!response) {
      throw new HttpError[501]('Command execution failed')
    }
    return {
      message: `done `
    }
  } catch (error) {
    throw new HttpError[500](error.message)
  }
}

