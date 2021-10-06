const client = require("./client/client.js");
require("./services/weather.js");
<<<<<<< HEAD
const client=require("./client/client.js");
=======
>>>>>>> c4ab72aeb6ade927354b09f265b1bf3bd8e97338

const prefixCmd = '!';

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "dailymeteo") {
        msg.channel.send("Voici la météo du jour !");
    }

<<<<<<< HEAD
});

// const userAction = async () => {
//     const response = await fetch('https://openweathermap.org/api');
//     const myJson = await response.json(); //extract JSON from the http response  
//   }


=======
});
>>>>>>> c4ab72aeb6ade927354b09f265b1bf3bd8e97338
