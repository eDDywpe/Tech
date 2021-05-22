const { MessageEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");

module.exports = {
    config: {
        name: "ban",
        description: "Bans a user from the guild!",
        usage: "&ban <@user> {reason}",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["b", "banish", "remove"]
    },
    run: async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")

   let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
   if(!banMember) return message.channel.send("Please provide a user to ban!")
 
   let reason = args.slice(1).join(" ");
   if(!reason) reason = "No reason given!"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command")

   banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
   message.guild.members.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

   message.channel.send(`**${banMember}** has been banned`)

    let embed = new MessageEmbed()
    .setColor("#5261f8")
    .setAuthor(`[BAN] | ${banMember.user.username}#${banMember.user.discriminator}`)
    .setDescription(`**Banned:** ${banMember} (${banMember.id}) \n**Moderator:** ${message.author} (${message.author.id})\n**Reason:** ${reason}`)
    .setTimestamp()
    
    let sChannel = message.guild.channels.cache.find(c => c.name === "audit-logs")
        sChannel.send(embed)
    }
}