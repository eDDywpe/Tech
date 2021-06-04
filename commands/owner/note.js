const { ownerid, ownersid } = require("../../botconfig.json");
module.exports = {
    config: {
        name: "note",
        description: "sends a message that was inputted to a channel",
        usage: "note",
        category: "owner",
        accessableby: "Bot Onwer",
        aliases: ["note"]
    },
    run: async (bot, message, args) => {

        if(message.author.id === "377509867923046404" || message.author.id === "788821492611416084" || message.author.id === "282969837490405376"){ 
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
} else {
    return message.reply("You are not the bot owner!").then(msg => msg.delete(5000))
    }
}}
