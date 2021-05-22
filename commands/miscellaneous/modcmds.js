const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const { white } = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{


message.channel.send("**MOD**``` -addrole <@user> [@role] (reason) (adds a role for the user) \n -ban <@user> (reason) (bans a user)\n -checkwarn <@user> (checks how many warns the user has) \n -clear <amount> (deletes 0-100 messages) \n -clearwarn <@user> (clears users warns) \n -kick <@user> (reason) (kicks a user) \n -lockall <on/off> (locks all channels) \n -mute <@user> (reason) (mutes a user) \n -removerole <@user> [@role] (reason) (removes a role from the user) \n -say <text> (says a text you wanted with bot) \n -setup (setups bots modlogs) \n -slowmode <time> (reason) (sets slowmode on the channel) \n -softban <@user> (reaosn) (bans and unbans a user) \n -tempmute <@user> [length] (reason) (mutes a user and then unmutes) \n -totalban <@user> (checks users total bans) \n -unban <ID> (reason) (unbans a user) \n -unmute <@user> (reason) (unmutes a user) \n -warn <@user> (reason) (warns a user) \n -lock <time s/m/h/d> (locks a channel) -unlock (unlocks a channel)```")
    
}


module.exports.config = {
    name: "modcmds",
    aliases: ["modcmd", "modcommands", "funcommand"],
    description: "Sends fun commands from database!",
    usage: "-funcmds",
    accessableby: "Members"
}