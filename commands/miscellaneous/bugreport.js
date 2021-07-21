const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons");


module.exports = { 
    config: {
        name: "bugreport",
        description: "",
        usage: "-bugreport",
        category: "miscellaneous",
        accessableby: "members",
        aliases: ["bugreport"]
    },
    run: async (bot, message, args) => {
        const channel = bot.channels.cache.get('846816764922560512')
        
        const reason = args.join(" ");
        if(!reason) return message.reply('Give a reason for the bug report!')

        const bugreportEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
        .setTitle("**New bug has been found!**")
        .addField("**Author:**", `${message.author} (ID: ${message.author.id})`, true)
        .addField("**Guild:**", `${message.guild} (ID: ${message.guild.id})`)
        .addField('**Report of the bug:**', reason)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp();

        let yes = new MessageButton()
        .setStyle("green")
        .setLabel('Fixed')
        .setID('hehe') 
        
        channel.send({
            component: yes,
            embed: bugreportEmbed
        })

        message.reply("***The report has been made!***")
        message.react('✅');

       
     }}
