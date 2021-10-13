const weather = require("../services/weather.js")


const command = (msg) => {
    const {command, params} = /^!(?<command>\w+)\s(?<params>.+)/.exec(message)?.groups ?? {};
    switch (command) {
        
        case 'test':
            return msg.reply("test1");
        case 'test1':
            return msg.reply("test2");
        case 'test2':
            return msg.reply("test3");
        case 'test3':
            return msg.reply("test4");

        // Weather services
        case 'weather':
            return msg.reply("Météo !!");//Weather.getWeather(message, params);
    }
};

module.exports = command;