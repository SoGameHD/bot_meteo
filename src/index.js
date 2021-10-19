const client = require("./client/client.js");
const message = require("./utils/message.js");
const command = require("./utils/command.js");

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("message", message);