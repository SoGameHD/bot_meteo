require("./services/weather.js");
const client=require("./client/client.js");

const prefixCmd = '!';

client.once("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "dailymeteo") {
        msg.channel.send("Voici la météo du jour !");
    }

});

// const userAction = async () => {
//     const response = await fetch('https://openweathermap.org/api');
//     const myJson = await response.json(); //extract JSON from the http response  
//   }


