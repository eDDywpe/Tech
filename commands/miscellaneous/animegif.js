const Discord = require("discord.js")
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");
const superagent = require('superagent')

module.exports = { 
    config: {
        name: "animegif",
        description: "Sends gif of animes",
        usage: "-animegif <item>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["animegifs"]
    },
  run: async (bot, message, args) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");

    const embed = new Discord.MessageEmbed()
    .setColor("#5261f8")
    .setTitle(`Heres your gif`)
    .setImage(body.url) 
    .setFooter(`© Made by Eddy`);
    message.channel.send({embed})

 
}
  }