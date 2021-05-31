const { MessageEmbed } = require('discord.js')
const os = require('os')



module.exports.config = {
        name: "info",
        aliases: ["info", "botinfo"],
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
            },
            {
                name: '<:owner:848802779593310218> Owner',
                value: `<@377509867923046404>, <@282969837490405376>`,
                inline: true, 
            },
            {
                name: '<:developer:845658260559626280> Developer',
                value: `<@788821492611416084>`,
                inline: true, 
            },
            {
                name: '<:developer:845658305975418890> Staff',
                value: ` <@470866478720090114>, <@582972374551494668>, <@531618779369832468>`,
                inline: true
            }
        )
        .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed)
}
