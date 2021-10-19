const { MessageEmbed } = require("discord.js");
 
function helpcmd(){
    const embed = new MessageEmbed()
        .setTitle('Liste des commandes')
        .setDescription('Voici la listes des commandes disponibles et fonctionnel pour notre bot :')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '!weather `[ta ville]`', value: 'Donne toutes les informations possibles, mais plus généralement' },
            { name: '!wind `[ta ville]`', value: 'Donne la vitesse et la direction du vent dans la ville donnée' },
            { name: '!temp `[ta ville]`', value: 'Donne la température dans la ville donnée' },
            { name: '!hum `[ta ville]`', value: 'Donne le taux d\'humidité dans la ville donnée' },
            { name: '!pres `[ta ville]`', value: 'Donne le taux de pression dans la ville donnée' }
        );
    // .setImage('https://i.imgur.com/AfFp7pu.png')
    msg.channel.send({ embeds: [embed] });
}

function wind(){
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
                { name: 'Force du vent :', value: `${vent} noeuds,avec une orientation **${windDirection[directionVentNormalise]}**` },
            )
            .setImage(cities[villeNormalise]);

        msg.channel.send({ embeds: [embed]});

     })
}


module.exports={
    helpcmd: helpcmd,
    wind: wind,
};