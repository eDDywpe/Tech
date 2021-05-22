const {MessageEmbed} = require('discord.js')
const {formatDate} = require('../../functions')
const { green } = require('../../colours.json')
module.exports = {
    config: {
        name: "servericon",
        description: "Sends peoples avatar from database!",
        usage: "-servericon [user mention]",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["servericon"]
    },

 run: async (bot, message, args) =>{
    let Embed = new MessageEmbed()
    let roles = []
    if(!message.mentions.users.first()){
        message.member.roles.cache.forEach(role=>{
            roles.push(role.name)
        })
        Embed.setTitle(`${message.guild.name}'s Server Icon!`)
        Embed.setColor("#5261f8")
        Embed.setImage( message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
        return message.channel.send(Embed)
    }else{
        let User = message.mentions.members.first()
        User.roles.cache.forEach(role=>{
            roles.push(role.name)
        })
        Embed.setTitle(`${message.guild.name}'s Server Icon!`)
        Embed.setColor("#5261f8")
        Embed.setImage( message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
        return message.channel.send(Embed)
        
        }
    }

}

