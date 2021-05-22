const Discord = require("discord.js")

module.exports = {
    config: {
        name: "8ball",
        description: "reloads a bot command!",
        usage: "-8ball",
        category: "miscellaneous",
        accessableby: "Bot Owner",
        aliases: ["8ball"]
    },
run: async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know",  "I am not sure!", "You tell me"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor("#5261f8")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)

    


 }}

