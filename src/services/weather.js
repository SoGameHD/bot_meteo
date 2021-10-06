require('dotenv').config();
const token  = process.env.WEATHER_TOKEN;
console.log(token);
const prefixCmd = '!';

// const getWeather = (message, params) => {

//     if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

//     const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === "test") {
//         msg.get('http://api.openweathermap.org/data/2.5/forecast', {
//                 params: {
//                     q: params,
//                     APPID: token
//                 }
//             })
//     }
    
// };