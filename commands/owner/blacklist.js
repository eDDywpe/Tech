const mongoose = require('mongoose');
const Discord = require("discord.js");
const fs = require('fs');
const customisation = require('../../hands/customisation.json')
module.exports = {
    config: {
        name: "blacklist",
        description: "reloads a bot command!",
        usage: "-blacklist",
        category: "owner",
        accessableby: "Bot Owner",
        aliases: ["blacklist"]
        
    },
    run: async (bot, message, args) => {

        if (message.author.id !== customisation.ownerid) return message.reply("You don't have the permission to use this command...");
        if (!args[0]) return message.reply("Valid args are: [on/off] [user]");
            let bl = false;
            const user = message.mentions.members.first() || bot.users.cache.get(args[1]);
    
            if(!user){
                return message.reply("Thats not a valid user!");
            }
            if(user.id === message.author.id){
                return message.reply("You are blacklisted");
            }
            let status = args[0];
            if(!status || status !== "on" && status !== "off"){
                 return message.channel.send("what are you trying to set their blacklist status to? `on` or `off`?");
            };
            if (status === "on") bl = true;
    
        let userDataScheme = require('../../models/user');
            userDataScheme.findOne({
              userID: user.id
            }, async(err, blacklist) => {
              if (err) console.error(err);
              if (!blacklist) {
                  const newBlacklist = new userDataScheme({
                      _id: mongoose.Types.ObjectId(),
                      userID: user.id,
                      blacklist: bl,
                  });
                  newBlacklist.save()
                      .catch(err => console.error(err));
              }else{
            if(status === "on"){
                  blacklist.blacklist = true;
                  await blacklist.save()
                      .catch(err => console.error(err));
            message.reply("That user has been blacklisted.");
                return;
                  }else if(status === "off"){
                    blacklist.blacklist = false;
                    await blacklist.save();
                    message.reply("That user has been unblacklisted.");
                }
            return;
    }
    })
    }}
    exports.conf = {
        enabled: true,
        guildOnly: false,
        
        permLevel: 5
      };