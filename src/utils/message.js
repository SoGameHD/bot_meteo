const { MessageEmbed } = require("discord.js");
const w_token  = process.env.WEATHER_TOKEN;
const weather = require('openweather-apis');
const windDirection = require('./windDirection.json');
const pays = require('./countries.json');
const prefixCmd = '!';

const message = (msg) => {
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //!weather
    if (command === "weather") {
        msg.reply("Voici la météo du jour !");
    }

    //!embed
    else if(command === "embed") {
        const embed = new MessageEmbed()
            .setTitle('Liste des commandes')
            .setDescription('Test')

        msg.channel.send({ embeds: [embed]});
    }

    //!help
    if (command === "help") {
        msg.reply("Ce bot te dis la météo du jour, où tu veux ! Pour me lancer, fait !t [ta ville] \nSi jamais tu ne tombe pas dessus du premier coup, précise le code postal !");
        console.log(args);
    }
    //!temps
    if(command === "temps"){
        msg.messageCreate();

    }
    if(command==="t"){
        const villeNormalise=args[0].toString().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());//le truc en chinois de 'replace' à 'uppercase' c'est pour faire un capitalize
        
        if(args[1]){
            const paysNormalise=args[1].toString();
            weather.setZipCode(paysNormalise);
        }
        
     weather.setLang('fr');
     weather.setUnits('metric');
     weather.setAPPID(w_token);
     weather.setCity(villeNormalise);
     

     weather.getAllWeather(function(error, resApi){
         
        if(error) console.error(error);


        console.log(resApi);
        const vent =resApi['wind']['speed'];
        const rafale=resApi['wind']['gust'];
        var directionVent=resApi['wind']['deg'];
        const humidite=resApi['']
        
        const directionVentNormalise = Math.round(directionVent/10)*10;
        //const ventHumour=vent|0;//Double to int en gros
        //${ptiteBlague[ventHumour]} à copier dans la phrase pour donner de l'humour au bot
        
        
        msg.reply(`Voici le temps qu'il fait à ${villeNormalise}, ${pays[resApi['sys']['country']]} :\nNiveau vent, on est à ${vent} noeuds, avec une orientation **${windDirection[directionVentNormalise]}**`);
        //msg.reply(presentation.image(msg, villeNormalise));

     })
     
    }
};

module.exports = message;
