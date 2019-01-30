const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../managers/config');

export default class DNSCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dns',
            aliases: [ 'ip' ],
            group: 'general',
            description: 'Returns Disconnect24`s DNS address.'
        });
    }

    async run(msg) {
        let dns = config.Get().dns;
        let embed = new discord.RichEmbed().setTitle('DNS values')
            .addField('Primary DNS:', dns.primary).addField('Secondary DNS:', dns.secondary)
            .setFooter('Please enter these DNS settings in your Wii Settings to connect to Disconnect24.');
        return msg.reply({ embed });
    }
};