const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const token  = process.env.WEATHER_TOKEN;

const prefixCmd = '!';

const message = (msg) => {
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //!weather
    if (command === "weather") {
        msg.reply("Voici la météo du jour !");
    }

    //!help
    else if(command === "help") {
        const embed = new MessageEmbed()
            .setTitle('Liste des commandes')
            .setDescription('Test')

        msg.channel.send({ embeds: [embed]});
    }
};

module.exports = message;