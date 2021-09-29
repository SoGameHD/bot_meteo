require("./services/weather.js");
require("./client/client.js");

// const { Client, Intents } = require('discord.js');
// require('dotenv').config();
// const token = process.env.DISCORD_TOKEN;

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefixCmd = '!';

client.once("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "daylimeteo") {
        msg.reply("Voici la météo du jour !");
    }

});

// const userAction = async () => {
//     const response = await fetch('https://openweathermap.org/api');
//     const myJson = await response.json(); //extract JSON from the http response  
//   }

// client.login(token);
