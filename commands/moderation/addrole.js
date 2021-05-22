const { MessageEmbed } = require("discord.js")
const { redlight } = require("../../colours.json")

module.exports= {
    config: {
        name: "addrole",
        description: "Adds a role to a member of the guild!",
        usage: "&addrole <@user> <@role> {reason}",
        category: "moderation",
        accessableby: "Moderators",
        aliases: ["ar", "roleadd"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide a user to add a role too.")
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to add to said user.") 
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Please provide a reason")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("I don't have permission to perform this command.")

    if(rMember.roles.cache.has(role.id)) {
        return message.channel.send(`${rMember}, already has the role!`)
    } else {
        await rMember.roles.add(role.id).catch(e => console.log(e.message));
        message.channel.send(`The role, ${role}, has been added to ${rMember}.`)
    }

    let embed = new MessageEmbed()
    .setColor("#5261f8")
    .setAuthor(`[ADDROLE] | ${rMember.user.username}#${rMember.user.discriminator}`)
    .setDescription(`**Given To:** ${rMember} (${rMember.id})\n**Moderator:** ${message.author} (${message.author.id})\n**Reason:** ${reason}`)
    .setTimestamp()

    let sChannel = message.guild.channels.cache.find(c => c.name === "audit-logs")
    sChannel.send(embed)
    }
}