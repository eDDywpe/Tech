const Discord = require('discord.js');
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports = {
    config: {
        name: "serverinfo",
        description: "Sends serverinfos from database!",
        usage: "-serverinfo",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["serverinfo"]
    },

 run: async (bot, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }
    let region;
    switch (message.guild.region) {
        case "europe":
            region = '🇪🇺 Europe';
            break;
        case "us-east":
            region = '🇺🇸 us-east'
            break;
        case "us-west":
            region = '🇺🇸 us-west';
            break;
        case "us-south":
            region = '🇺🇸 us-south'
            break;
        case "us-central":
            region = '🇺🇸 us-central'
            break;
    }

    let sicon = message.guild.iconURL();
    let serverembed = new Discord.MessageEmbed()
        .setThumbnail(sicon)
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL())
        .setColor("#5261f8")
        .addField('Server owner', message.guild.owner, true)
        .addField('Server 🗺 Region', region, true)
        .addField("Server Name", message.guild.name, true)
        .addField('Verification level', message.guild.verificationLevel, true)
        .addField('Channel count', message.guild.channels.cache.size, true)
        .addField('Total member count', message.guild.memberCount, true)
        .addField('Humans', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('Online', checkOnlineUsers(message.guild), true)
        .addField("AFK Timeout", message.guild.afkTimeout / 60 + ' minutes', true)
        .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
        .addField("Server ID", message.guild.id, true)
        .setFooter('Bot made by Eddy')
        .setTimestamp();

    return message.channel.send(serverembed);
}}