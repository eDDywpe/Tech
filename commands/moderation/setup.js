module.exports = {
    config: {
        name: "setup",
        description: "Kick a user from the guild!",
        usage: "-setup",
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["setup"]
    },
    run: async (bot, message, args) => {

    let modlogs = message.guild.channels.cache.find(c => c.name === "audit-logs") 
    if(!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.channel.send("You dont have permission to perform this command!")
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !modlogs) {
        await message.guild.channels.create('audit-logs', {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL'],
                },
            ],
        });
  }
  
   
    message.channel.send("Bot has been setuped!!")
    
        
    }
}