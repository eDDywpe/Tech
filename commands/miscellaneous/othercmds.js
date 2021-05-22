const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const { white } = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{


message.channel.send("**OTHER**``` -botstats (bot stats)  \n -corona (info of corona status.) \n -decode \n -distance  \n -giveaway <(time s/m/h/d) #channel (prize)> (sets a giveaway for the channel with the prize)\n  -help (sends all help commands) \n -info (sends bot info) \n -invite (bot invite) \n -ping (sends bots ping) \n -serverinfo (info of the server) \n -serverinvite (sends serverinvite) \n -setafk <afk / notafk> \n -uptime (sends uptime of the bot) \n -userinfo <@user> \n -weather <city>```")
    
}


module.exports.config = {
    name: "othercmds",
    aliases: ["othercmd", "othercommands", "othercommand"],
    description: "Sends other commands from database!",
    usage: "-othercmds",
    accessableby: "Members"
}