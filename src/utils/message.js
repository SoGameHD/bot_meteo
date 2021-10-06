const prefixCmd = '!';

const message = (msg) => {
    if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "weather") {
        msg.reply("Voici la météo du jour !");
    }
};


module.exports = message;