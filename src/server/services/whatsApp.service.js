const { sendWhatsAppRequest } = require('./WhatsAppRequest')

async function sendMessage(message) {

  const response = await sendWhatsAppRequest('POST', 'message/send', message)
  return response
}

async function manageUsers(userData) {

  const response = await sendWhatsAppRequest('POST', 'users/manage', userData)
  return response
}

module.exports = { sendMessage, manageUsers }


