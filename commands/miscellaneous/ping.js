module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: "k!ping",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        message.channel.send('Ping?').then(m => m.edit(`⌛ API: ${m.createdTimestamp - message.createdTimestamp}ms. ⌛ Web Socket: ${Math.round(bot.ws.ping)}ms.`))
    }
}