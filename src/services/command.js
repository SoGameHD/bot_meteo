const { MessageEmbed } = require("discord.js");
const w_token  = process.env.WEATHER_TOKEN;
const weather = require('openweather-apis');
const windDirection = require('../utils/windDirection.json');
const pays = require('../utils/countries.json');
const cities = require('../utils/cities.json');
const prefixCmd = '!';
import {helpcmd, wind} from './message.js';

const message = (msg) => {
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //!help
    if(command === "help") {
        helpcmd();
        }

    // !weather, commande général et principal qui appel toutes les informations concernant la ville donnée
    if(command==="weather"){
        const villeNormalise=args[0].toString().toLowerCase().replace(/^\w/, (c) => c.toUpperCase()); // le truc en chinois de 'replace' à 'uppercase' c'est pour faire un capitalize
        
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

        console.log(resApi);//Response

        const vent =resApi['wind']['speed'];
        const rafale=resApi['wind']['gust'];
        var directionVent=resApi['wind']['deg'];
        const humidite=resApi['']
        
        const directionVentNormalise = Math.round(directionVent/10)*10;
        //const ventHumour=vent|0;//Double to int en gros
        //${ptiteBlague[ventHumour]} à copier dans la phrase pour donner de l'humour au bot
        
        const embed = new MessageEmbed()
            .setTitle(`Météo de ${villeNormalise}`)
            .setDescription(`Voici le temps qu'il fait à ${villeNormalise}, ${pays[resApi['sys']['country']]}`)
            .addFields(

                { name: '\u200B', value: '\u200B' },
                { name: '!weather [ta ville]', value: 'Précisez le code postal de la ville si nécessaire' },
            )
            .setImage(cities[villeNormalise]);

        msg.channel.send({ embeds: [embed]});
     })
     
    }

    // !weather, commande général et principal qui appel toutes les informations concernant la ville donnée
    if(command==="wind"){
        wind()
     
    }
};

module.exports = message;
