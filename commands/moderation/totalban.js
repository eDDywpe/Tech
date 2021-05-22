const { MessageEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");

module.exports = {
    config: {
        name: "totalban",
        description: "Unmutes a member in the discord!",
        usage: "totalban",
        category: "moderation",
        accessableby: "Members",
        aliases: ["totalban"]
    },
    run: async (bot, message, args) => {


        message.guild.fetchBans().then(bans => {
            message.channel.send(`${bans.size} `)
            
        })
    }
}