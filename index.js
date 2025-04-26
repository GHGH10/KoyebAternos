const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.SERVER_HOST || 'ghnetwork.aternos.me',
  port: Number(process.env.SERVER_PORT) || 64655,
  username: process.env.BOT_USERNAME || 'GHBot'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(`Selam ${username}!`)
})

bot.on('kicked', console.log)
bot.on('error', console.log)
