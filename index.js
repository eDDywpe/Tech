const { Client, Collection, MessageEmbed} = require("discord.js");
const fs = require('fs');
const jsonfile = require('jsonfile');
const { message, lineReply } = require('discord-reply');
const { token } = require("./botconfig.json");
const moment = require('moment')
const mongoose = require('mongoose')
const bot = new Client();
require('discord-buttons')(bot)




["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

mongoose.connect(settings.mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true   }, err => {
  if (err) return console.error(err);
  console.log(chalk.bgGreen.black('Connected to MongoDB database!'));
});

bot.on('messageDelete', async message => {
    const logs = message.guild.channels.cache.find(channel => channel.name === "audit-logs");
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    message.guild.createChannel('logs', 'text');
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
    console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
  }  
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = message.author
  
  const embed = new MessageEmbed()
  .setDescription(message.content)
  
  let sChannel = message.guild.channels.cache.find(c => c.name === "audit-logs")
  
  sChannel.send(`
**[MESSAGE DELETED]** | **${user.tag}**

**User:** ${user}
**Reason:** messsage has been deleted
**Channel:** ${message.channel}:
`)
 sChannel.send(embed)

 
});


bot.on("channelCreate", function (channel) {
  const channelDeleteId = channel.id;
const sChannel = channel.guild.channels.cache.find(channel => channel.name === 'audit-logs');
channel.guild.fetchAuditLogs({'type': 'CHANNEL_CREATE'}) 
// find the log entry for this specific channel
.then( logs => logs.entries.find(entry => entry.target.id == channelDeleteId) ) 
.then (entry => {
  // get the author of the deletion
  author = entry.executor;
      sChannel.send(`**[CHANNEL CREATED]** | **${author.tag}**

**Created by:** ${author}
**Channel:** ${channel} (**ID:** (${channel.id  }))
`)})

  
});
bot.on("channelDelete", function (channel) {
  const channelDeleteId = channel.id;
const sChannel = channel.guild.channels.cache.find(channel => channel.name === 'audit-logs');
channel.guild.fetchAuditLogs({'type': 'CHANNEL_DELETE'}) 
// find the log entry for this specific channel
.then( logs => logs.entries.find(entry => entry.target.id == channelDeleteId) ) 
.then (entry => {
  // get the author of the deletion
  author = entry.executor;
sChannel.send(`**[CHANNEL DELETED]** | $**{author.tag}**

**Deleted by:** ${author}
**Channel:** ${channel.name} (**ID:** (${channel.id}))
`) })
});

bot.on("inviteCreate", function (invite) {

      const sChannel = invite.guild.channels.cache.find(channel => channel.name === 'audit-logs');
      const inviter = bot.users.cache.get(invite.inviter.id);
sChannel.send(`**[INVITE CREATED]** | **${inviter.tag}**

**Created by:** ${inviter}
**Invite URL:** ${invite.url}
**Invite Code:** ${invite.code}
      
      `)
});
bot.on("inviteDelete", function (invite) {
  const sChannel = invite.guild.channels.cache.find(channel => channel.name === 'audit-logs');

sChannel.send(`**[INVITE DELETED]** | 

**Invite URL:** ${invite.url}
**Invite Code:** ${invite.code}
  
  `)});

  bot.on("guildBanAdd", function (guild, user) {

        const sChannel = guild.channels.cache.find(channel => channel.name === 'audit-logs');

sChannel.send(`**[BAN]** | ${user.tag}
        
**User:** ${user}

          
`)
});

bot.on("guildBanRemove", function (guild, user) {
  
  const sChannel = guild.channels.cache.find(channel => channel.name === 'audit-logs');

  sChannel.send(`**[UNBANNED]** | ${user.tag}
  
**User:** ${user}

    
    `)});

bot.on('clickButton', async (button) => {
    if (button.id === 'hehe') {
        await button.clicker.fetch()
        if(!button.clicker.member.roles.cache.has('851676282407616543')) return button.reply.send("You have no permission to use this.", true)
        const approvedEmbed = new MessageEmbed()
            .setTitle('**Bug has been fixed!**')
            
            .setAuthor(`${button.clicker.user.username}#${button.clicker.user.discriminator}`, button.clicker.user.displayAvatarURL({ dynamic: true}))
            .setThumbnail(button.message.embeds[0].thumbnail.url)
            .setColor('#24fc03')
            .addField("**Author:**", button.message.embeds[0].fields[0].value)
            .addField("**Guild:**", button.message.embeds[0].fields[1].value)
            .addField("**Report of this bug:**", button.message.embeds[0].fields[2].value)
            .addField("**Fixed by**", `✅ ${button.clicker.user}  fixed this bug.`, true)
            .setTimestamp();
          
        button.message.edit('', { embed: approvedEmbed});
        button.message.edit({ components: [] })  
    
    }
});

bot.login(token);
