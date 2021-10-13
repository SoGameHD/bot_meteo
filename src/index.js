const client = require("./client/client.js");
const w_token = process.env.WEATHER_TOKEN;
var axios = require('axios');


const prefixCmd = '!';

client.once("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", msg => {

    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "dailymeteo") {
        msg.messageCreate("Voici la météo du jour !");
        console.log(args);
    }
    if(command==="temps"){
        msg.messageCreate();

    }
    if(command==="t"){
     const villeNormalise=args[0].toString().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());//le truc en chinois de replace à uppercase c'est pour faire un capitalize
    
     axios
        .get('http://api.openweathermap.org/data/2.5/weather',{
            params:{
                q:villeNormalise,
                appid:w_token
            }
        })
        .then(response=>{
            console.log(apiData.data);
        
        });


     
     msg.reply(`Voici le temps qu'il fait à ${villeNormalise} :`);
     //  http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=
    }

});

// const userAction = async () => {
//     const response = await fetch('https://openweathermap.org/api');
//     const myJson = await response.json(); //extract JSON from the http response  
//   }


