const commando = require('discord.js-commando');
const path = require('path');
const package = require('../package.json');
const Config = require('./managers/config.js');
const Database = require('./managers/database.js');

var config = new Config().load();

const client = new commando.Client({
	owner: config.bot.owner,
	commandPrefix: config.bot.prefix
});

var database = new Database().connect(config.auth.database);

client.on('ready', async function() {
    console.log(`${client.user.tag} is online and running!`);
    client.user.setActivity(`Use ${config.prefix}help | DC24 Bot v${package.version}`);
});

client.registry
    .registerGroup('code', 'Code')
    .registerGroup('general', 'General')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.auth.token);
