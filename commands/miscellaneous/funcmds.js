const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const { white } = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{


message.channel.send("**FUN**``` -8ball <@question> (answers to your question) \n -flipcoin (flips a coin) \n -hbreak <@user> (breaks a user's heart)\n -math <* / / - / ^ / +> (makes the math for you) \n -rolldice (rolls dice)```")
    
}


module.exports.config = {
    name: "funcmds",
    aliases: ["funcmd", "funcommands", "funcommand"],
    description: "Sends fun commands from database!",
    usage: "-funcmds",
    accessableby: "Members"
}