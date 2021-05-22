var flipcoin = ["heads", "tails"];


module.exports = { 
    config: {
        name: "flipcoin",
        description: "Sends coinflip!",
        usage: "-flipcoin",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
}}