const client = require("./client/client.js");
const message = require("./utils/message.js");
require("./services/weather.js");

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", message);