const client = require("./client/client.js");
const w_token = process.env.WEATHER_TOKEN;
const weather = require('openweather-apis');
const windDirection=require('./utils/windDirection.json')
const ptiteBlague=require('./utils/humor.json')


const prefixCmd = '!';

client.once("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        msg.messageCreate("Ce bot te dis la météo du jour, où tu veux ! Pour me lancer, fait !t [ta ville] \nSi jamais tu ne tombe pas dessus du premier coup, précise le pays !");
        console.log(args);
    }
    if(command==="temps"){
        msg.messageCreate();

    }
    if(command==="t"){
     
        const villeNormalise=args[0].toString().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());//le truc en chinois de 'replace' à 'uppercase' c'est pour faire un capitalize
    
     weather.setLang('FR');
     weather.setUnits('metric');
     weather.setAPPID(w_token);
     weather.setCity(villeNormalise);

     weather.getAllWeather(function(error, resApi){
         if(error) console.error(error);

        const vent=resApi['wind']['speed'];
        var directionVent=resApi['wind']['deg'];
        
        const directionVentNormalise = Math.round(directionVent/10)*10;
        const ventHumour=vent|0;//Double to int en gros
        //${ptiteBlague[ventHumour]} à copier dans la phrase pour donner de l'humour au bot
        msg.reply(`Voici le temps qu'il fait à ${villeNormalise} :`);

        msg.reply(`Niveau vent, on est à ${vent} noeuds, avec une orientation **${windDirection[directionVentNormalise]}**`);

     })
     
    }

});



