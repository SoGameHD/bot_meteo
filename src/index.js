const client = require("./client/client.js");
const command = require("./services/command.js");

client.on ("ready", () => {
    console.log("🌤 Weather Bot Online ☁");
});

client.on("command", command);