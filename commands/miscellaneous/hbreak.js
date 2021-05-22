const Discord = require("discord.js")

module.exports = { 
    config: {
        name: "hbreak",
        description: "-hbreak <User> breaks someone's heart!",
        usage: "-hbreak <User>",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["-hbreak", "-hbroken"]
    },

run: async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.MessageEmbed()
.setColor("#5261f8")
.setDescription(`${message.author} decided to broke their heart themself 💔 REST IN PEACE`)

message.channel.send(emb)

} else {

let emb = new Discord.MessageEmbed()
.setColor("#5261f8")
.setDescription(`${killed} heart was broken by ${message.author} 💔 REST IN PEACE`)

message.channel.send(emb)


    }
}}

