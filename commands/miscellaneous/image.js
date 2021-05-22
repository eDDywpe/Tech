const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const { white } = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{


message.channel.send("**Image**``` -animegif (sends anime gif) \n -animepat <@user> (pats an user) \n -avatar <@user> (sends avatar of a user) \n -cat (sends image of a cat) \n -dog (sends image of a dog.) \n -gif <theme> (sends a gif of the theme)\n -hug <@user> (hugs a user) \n -servericon (sends servericon's)```")
    
}


module.exports.config = {
    name: "image",
    aliases: ["image"],
    description: "Sends image commands from database!",
    usage: "-image",
    accessableby: "Members"
}