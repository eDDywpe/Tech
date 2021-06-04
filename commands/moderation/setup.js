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
  
    let msg;
    let embed = new MessageEmbed()
    .setColor("#f9f9f6")
    .setDescription(`***25% Done***`)
    
    
    msg = await message.channel.send(embed)


    let sembed = new MessageEmbed()
    .setColor("#f9f9f6")
    .setDescription(`***50% Done***`)
        setTimeout(() => {
            // Edit msg 20 seconds later
        msg.edit(sembed);
        }, 10000);

        let ssembed = new MessageEmbed()
        .setColor("#f9f9f6")
        .setDescription(`***75% Done***`)
            setTimeout(() => {
                // Edit msg 20 seconds later
                msg.edit(ssembed);
            }, 15000);

            let seembed = new MessageEmbed()
            .setColor("#f9f9f6")
            .setDescription(`
    ***25% Done*** - Setupped audit-logs
    ***50% Done*** - Setupped Welcome channel
    ***75% Done*** - Setupped Leave channel
    ***100% Done*** - Fixed everything
    `)
                setTimeout(() => {
                    // Edit msg 20 seconds later
                    msg.edit(seembed);
                }, 20000);
        }
    }
