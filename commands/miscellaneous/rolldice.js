const Discord = require('discord.js');
module.exports = {
    config: {
        name: "rolldice",
        description: "reloads a bot command!",
        usage: "-rolldice",
        category: "miscellaneous",
        accessableby: "Bot Owner",
        aliases: ["rolldice"]
    },
    run: async (bot, message, args) => {
    var dice = [1, 2, 3, 4, 5, 6];

    const embed = new Discord.MessageEmbed()
        .setColor("#5261f8")
        .addField("First dice", dice[Math.floor(Math.random()*dice.length)], true)
        .addField("Second dice", dice[Math.floor(Math.random()*dice.length)], true)
        .setTimestamp();

    return message.channel.send(embed);    
}}