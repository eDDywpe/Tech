const Discord = require("discord.js")
const superagent = require('superagent')

module.exports = { 
    config: {
        name: "animepat",
        description: "Sends gif of animes",
        usage: "-animepat",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["animepat"]
    },
  run: async (bot, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them :3");
    if (message.mentions.users.first().id === bot.user.id) return message.channel.send('Sheeesh');
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('I see you are lonely,.. ***headpats you***');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");

    const embed = new Discord.MessageEmbed()
    .setColor("#5261f8")
    .setTitle(`${message.mentions.users.first().username}, you got a head pat from ${message.author.username}!`)
    .setImage(body.url) 
    .setFooter(`© Made by Eddy`);
    message.channel.send({embed})

 
}
  }