const { owners } = require("../../botconfig.json");
module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "k!shutdown",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {
        
        if(message.author.id != "833635449829457920") return message.channel.send("You're not the bot owner!")
    

    try {
        await message.channel.send("Bot is shutting down... bye bitches!")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}