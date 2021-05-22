const { MessageEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");

module.exports = {
    config: {
        name: "softban",
        description: "Softbans a user from the guild!",
        usage: "&softban <@user> {reason} (it unbans instantly, after ban!)",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["tempban"]
    },
    run: async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You do not have permission to perform this command!")

   let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
   if(!banMember) return message.channel.send("Please provide a user to ban!")

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "No reason given!"

   if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to perform this command")

   banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
   message.guild.members.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.members.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err))

   message.channel.send(`**${banMember}** has been softbanned`)

    let embed = new MessageEmbed()
    .setColor("#5261f8")
    .setAuthor(`[SOFTBAN] | ${banMember.user.username}#${banMember.user.discriminator}`)
    .setDescription(`**Banned:** ${banMember} (${banMember.id}) \n**Moderator:** ${message.author} (${message.author.id})\n**Reason:** ${reason}`)
    .setTimestamp()
    
    let sChannel = message.guild.channels.cache.find(c => c.name === "audit-logs")
        sChannel.send(embed)
   



    }
}