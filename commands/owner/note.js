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

        if(message.author.id != "377509867923046404") return message.channel.send("You're not the bot owner!")
    
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

    }
}