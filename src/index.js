const client = require("./client/client.js");
require("./services/weather.js");

const prefixCmd = '!';

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return
   
    const args = msg.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'help') {
        msg.reply('Bien le bonjour ! Ce bot discord est là pour indiquer la météo ! Lancez !weather [Votre ville] pour trouver la météo de la ville en question !');
      }
    
    if (command === "weather") {
        
       
        //var montruc = JSON.parse(country);

        msg.reply("Voici la météo du jour à "+args);
    }

});

