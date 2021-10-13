const getWeather = require("../services/weather.js");
const axios = require("axios");
const token  = process.env.WEATHER_TOKEN;

const prefixCmd = '!';

const message = (msg) => {
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "weather") {
        msg.reply("Voici la météo du jour !");
    }
    else if(command === "help") {
        // msg.reply(getWeather);
        axios
            .get('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: args.join(),
                    APPID: token
                }
            })
            .then(response => {
                let apiData = response;
                let maxTemp = apiData.data; 
                let cityName = args;
                console.log(apiData);
                msg.reply("cityname:" + cityName);
                
            }).catch((error) => console.log(error))
    }
};


module.exports = message;