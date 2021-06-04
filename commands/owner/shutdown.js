const { owners } = require("../../botconfig.json");
module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "-shutdown",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {
        
        if(message.author.id === "377509867923046404" || message.author.id === "788821492611416084" || message.author.id === "282969837490405376"){ 
    

    try {
        await message.channel.send("Bot is shutting down... bye bitches!")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    
} else {
    return message.reply("You are not the bot owner!").then(msg => msg.delete(5000))

    }
}}
