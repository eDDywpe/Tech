const Discord = require('discord.js');
let days = 0;
let week = 0;

module.exports = {
    config: {
        name: "uptime",
        description: "Sends bots uptime!",
        usage: "-uptiem",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["uptime"]
    },
 run: async (client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 24){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#5261f8")
        .addField('Uptime', uptime);

    message.channel.send(serverembed);

}}