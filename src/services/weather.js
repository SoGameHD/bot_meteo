const command = require("../utils/command.js");
const axios = require("axios");
const token  = process.env.WEATHER_TOKEN;
console.log(token);

const getWeather = (msg) => {
    if (false) {
    } else {
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

module.exports = getWeather;