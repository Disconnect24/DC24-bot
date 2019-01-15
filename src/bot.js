import { Client } from 'discord.js-commando';
import { join } from 'path';

var config = Config.Load();

const client = new Client({
	owner: config.bot.owner,
	commandPrefix: config.bot.prefix
});

Database.Connect(config.auth.database);

client.on('ready', async function() {
    console.log(`${bot.user.tag} is online and running!`);
    bot.user.setActivity(config.bot.status);
})

client.registry
    .registerGroup('code', 'Code')
    .registerDefaults()
    .registerCommandsIn(join(__dirname, 'commands'));

client.login(config.auth.token);