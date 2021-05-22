const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports.config = {
        name: "info",
        aliases: ["info"],
        description: "Sends bots info from database!",
        usage: "-info",
        accessableby: "Members"
    },
    module.exports.run = async(bot, message, args) => {

        const embed = new MessageEmbed()
        .setThumbnail(bot.user.displayAvatarURL())
        .setTitle('Bot Info')
        .setColor('#5261f8')
        .addFields(
            {
                name: '🌐 Servers',
                value: `Serving ${bot.guilds.cache.size} servers.`,
                inline: true
            },
            {
                name: '📺 Channels',
                value: `Serving ${bot.channels.cache.size} channels.`,
                inline: true
            },
            {
                name: '👥 Server Users',
                value: `Serving ${bot.users.cache.size}`,
                inline: true
            },
            {
                name: '⏳ Ping',
                value: `${Math.round(bot.ws.ping)}ms`,
                inline: true
            },
            {
                name: 'Join Date',
                value: bot.user.createdAt,
                inline: true
            },
            {
                name: 'Server Info',
                value: `Cores: ${os.cpus().length}`,
                inline: true
            }
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed)
}
