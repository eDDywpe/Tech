const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "meme",
        description: "Get a meme from database!",
        usage: "s!meme",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["memes"]
    },
 run: async (bot, message, args) =>{
    const url = 'https://some-random-api.ml/meme';

    let data, response;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`Error, try again!`)
    }

    const embed = new MessageEmbed()
        .setTitle(`Random Meme: `)
        .setDescription(data.caption)
        .setColor('#5261f8')
        .setImage(data.image)

    await message.channel.send(embed)
}
}