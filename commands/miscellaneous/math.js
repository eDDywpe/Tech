const {calculator} = require('../../functions')
module.exports={
    config: {
        name: "math",
        description: "Sends u a invite from database!",
        usage: "s!math",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["maths", "calc"]
    },
 run: async (bot, message, args) =>{
     if(!args[0]) return message.channel.send('You did not specify your first number!')
     if(!args[1]) return message.channel.send('You did not specify the type of sum!')
     if(!args[2]) return message.channel.send('You did not specify your second number!')
     message.channel.send(calculator(args[0],args[1],args[2]))
    }
}