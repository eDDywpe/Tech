const { Client, Collection, MessageEmbed, Discord} = require("discord.js");
const ytdl = require('ytdl-core');
const chalk = require('chalk');
const { token } = require("./botconfig.json");
const settings = require("./botconfig.json");
const random = require('random');
const fs = require('fs');
const jsonfile = require('jsonfile');
const { green } = require("./colours.json")
const mongoose = require('mongoose')
const bot = new Client();




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







bot.login(token);
