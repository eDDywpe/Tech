module.exports = {
    config: {
        name: "serverinvite",
        description: "Sends u a serverinvite from database!",
        usage: "-serverinvite",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["serverinvite"]
    },
 run: async (bot, message, args) =>{
    const setChannelID = message.content.split(' ');

    try{
        message.guild.channels.cache.get(setChannelID[1]).createInvite().then(invite =>
            message.channel.send("The channel invite has been created: \n" + invite.url)
        );
    }

    catch(error){
        console.error(`I could not create the invite for the channel: ${error}`);
        message.channel.send(`You have to paste a correct channel ID!`);
    }
}}