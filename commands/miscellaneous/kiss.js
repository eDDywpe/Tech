const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    config: {
        name: "kiss",
        description: "reloads a bot command!",
        usage: "-kiss",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["kiss"]
    },
    run: async (bot, message, args) => {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them");
        if (message.mentions.users.first().id == bot.user.id && message.author.id !== "377509867923046404") return message.reply("No kissing unless you're my Dev thanks!")
        if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
        if (message.mentions.users.first().id == bot.user.id && message.author.id == "377509867923046404") return message.reply("I don't like it maybe?")
        const { body } = await superagent
        .get("https://nekos.life/api/kiss");

        const embed = new Discord.MessageEmbed()
        .setColor("#5261f8")
        .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username} `)
        .setImage(body.url) 

        await message.channel.send(embed)
    }
}