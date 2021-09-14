const discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const { white } = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) =>{
 if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new discord.MessageEmbed()
            .setColor("#5261f8")
            .setAuthor(`Tech HELP`, bot.user.displayAvatarURL())
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter("Tech", bot.user.displayAvatarURL())
            .setDescription(`**The bot prefix is:** ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        let Sembed = new discord.MessageEmbed()
        .setColor("#5261f8")
        .setAuthor(`Tech commands`, bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField(`**Fun**`, "``-funcmds or -funcommands``", true)
        .addField("**Moderation**", "``-modcmds or -modcommands``", true)
        .addField("**Image**", "``-image``", true)
        .addField("**Other**", "``-othercmds or -othercommands``", true)
        .addField("**Owner**", "``-ownercmds or -ownercommands``", true)
        .addField("**Future**", "``-futurecmds or -futurecommands``", true)
        message.channel.send(Sembed)
    }
    
}


module.exports.config = {
    name: "help",
    aliases: ["help"],
    description: "Sends Help commands from database!",
    usage: "s!help",
    accessableby: "Members"
}
