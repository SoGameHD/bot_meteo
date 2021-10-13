const client = require("./client/client.js");
const w_token = process.env.WEATHER_TOKEN;
const weather = require('openweather-apis');

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
        const directionVent=resApi['wind']['deg'];

        msg.reply(`Voici le temps qu'il fait à ${villeNormalise} :`);
        console.log(directionVent)

        //====================== TODO : rendre le code d'en dessous lisible, et pas un truc qui arrache les yeux (Faire un JSON qui pourra pick en fonction de l'angle ?)======
        switch (directionVent) {
            case 0:
         msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté plein Est`)
               
                break;
            case 30:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Est/Nord-Est`)
                      
             break;
            
             case 60:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Nord/Nord-Est`)
                      
             break;
             case 120:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Nord/Nord-Ouest`)
                      
             break;
             case 150:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Ouest/Nord-Ouest`)
                      
             break;
             case 180:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté plein Ouest`)
                      
             break;
             case 210:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Ouest/Sud-Ouest`)
                      
             break;
             
             case 240:
             msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Sud/Sud-Ouest`)
                       
              break;
              case 270:
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté plein Sud`)
                      
             break;
             case 300:
                msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Sud/Sud-Est`)
                          
                 break;
            case 330:
                msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Est/Sud-Est`)
                          
            break;
            case 360:
                msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté plein Est`)
                          
                 break;
            default:
                break;
        }
         
         if (directionVent<30 && directionVent>0||directionVent>330&&directionVent<360) {//Vent orienté Est
         msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Est`)
             
         } else if(directionVent>30&&directionVent<60) {
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Nord-Est.`)
         
        } else if(directionVent>60&&directionVent<120){//Nord
            
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Nord`)

         }else if(directionVent>120&&directionVent<150){
            
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Nord-Ouest`)
         
        }else if(directionVent>150&&directionVent<210){
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Ouest`)
        
        }else if(directionVent>210&&directionVent<240){
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Sud-Ouest`)
        
        }else if(directionVent>240&&directionVent<300){
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Sud`)
        
        }else if(directionVent>300&&directionVent<330){
            msg.reply(`Niveau vent, on est à ${vent} noeuds, et on est plus orienté Sud-Est`)
          //=====================================================================================================
         }

     })
        


     
     
    }

});

// const userAction = async () => {
//     const response = await fetch('https://openweathermap.org/api');
//     const myJson = await response.json(); //extract JSON from the http response  
//   }


