
const axios = require('axios')
require('dotenv').config()

module.exports.sendWhatsAppRequest = async function (method, endpoint, data) {
  try {
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
    const response = await axios({
      method: method,
      url: `https://api.whatsapp.com/v1/${endpoint}`,
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: data
    })
    return response.data
  } catch (error) {
    throw new Error(`WhatsApp API request failed: ${error.response.status} - ${error.response.data}`)
  }
}