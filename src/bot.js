const commando = require('discord.js-commando');
const discord   = new require(`discord.js`);
const mysql     = require('mysql');
const fs        = require("fs");
const config    = JSON.parse(fs.readFileSync("./Settings/config.json", "utf8"));

const client = new commando.Client({
	owner: config.bot.owner,
	commandPrefix: config.bot.prefix
});

client.on('ready', async function() {
    console.log(`${bot.user.tag} is online and running!`);
    bot.user.setActivity(config.bot.status);
})

client.login(config.auth.token);