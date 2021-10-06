const client = require("./client/client.js");
require("./services/weather.js");

const prefixCmd = '!';

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "daylimeteo") {
        msg.reply("Voici la météo du jour !");
    }

});