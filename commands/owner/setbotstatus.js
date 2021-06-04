module.exports = {
    config: {
        name: "setbotstatus",
        description: "setbotstatus",
        usage: "setbotstatus <status>",
        category: "Moderation",
        accessableby: "Moderators",
        aliases: ["setbotstatus"]
    },
    run: async (client, message, args) => {
    const setStatus = message.content.split(' ');
    if(message.author.id != "377509867923046404") return message.channel.send("You're not the bot owner!")
    if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("You don't have the permissions to use this command!");
    }

  else if(setStatus[1] === 'idle'){
        client.user.setStatus('idle')
            .then(message.channel.send("My status has been set to: "+setStatus[1]))
            .catch(console.error);
    } 

    else if(setStatus[1] === 'online'){
        client.user.setStatus('online')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

    else if(setStatus[1] === 'invisible'){
        client.user.setStatus('invisible')
            .then(message.channel.send("My status has been set to: "+ setStatus[1]))
            .catch(console.error);
    }

 else if(setStatus[1] === 'dnd'){
        client.user.setStatus('dnd')
            .then(message.channel.send("My status has been set to: "+ setStatus[1] + "(Do Not Disturb)"))
            .catch(console.error);
    }

    else{
            return message.channel.send("I could not set my status please type one of the following status: idle, online, invisible, dnd (do not disturb)");
    }

}}
