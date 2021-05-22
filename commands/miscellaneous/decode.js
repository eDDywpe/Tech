const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    config: {
        name: "decode",
        description: "reloads a bot command!",
        usage: "-decode",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["decode"]
    },
    run: async (bot, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text)

        await message.channel.send(embed)
    }
}