const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{

    if(args[0] == "invite") return message.channel.send(`Just do ${prefix}help instead.`)



    if(!args[0]) {
        let Sembed = new discord.MessageEmbed()
        .setColor("#5261f8")
        .addField("***Add Me:***", "[Click to add me to your server!](https://discord.com/oauth2/authorize?client_id=835526427662483526&scope=bot&permissions=470019319)")
        message.channel.send(Sembed)
    }
    
}


module.exports.config = {
    name: "invite",
    aliases: ["invite"],
    description: "Sends invite command from database!",
    usage: "s!invite",
    accessableby: "Members"
}
