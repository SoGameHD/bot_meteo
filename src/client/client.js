const { Client, Intents } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token);

<<<<<<< HEAD
module.exports=client;
=======
module.exports = client;
>>>>>>> c4ab72aeb6ade927354b09f265b1bf3bd8e97338
