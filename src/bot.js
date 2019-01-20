const commando = require('discord.js-commando');
const path = require('path');
const package = require('../package.json');
const Config = require('./Managers/Config');

var config = Config.Load();

const client = new commando.Client({
	owner: config.bot.owner,
	commandPrefix: config.bot.prefix
});

Database.Connect(config.auth.database);

client.on('ready', async function() {
    console.log(`${bot.user.tag} is online and running!`);
    bot.user.setActivity(config.bot.status + " | DC24 Bot v" + package.version);
})

client.registry
    .registerGroup('code', 'Code')
    .registerGroup('general', 'General')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.auth.token);