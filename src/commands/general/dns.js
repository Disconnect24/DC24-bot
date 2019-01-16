import { Command } from 'discord.js-commando';
import { RichEmbed } from 'discord.js'

export default class DNSCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dns',
            aliases: [ 'ip' ],
            group: 'general',
            description: 'Returns Disconnect24`s DNS address.'
        });
    }

    async run(msg) {
        var dns = Config.Get().dns;
        let embed = new RichEmbed()
            .setTitle('Here are the Disconnect24 DNSes.')
            .addField('Primary DNS:', dns.primary)
            .addField('Secondary DNS:', dns.secondary)
            .setColor(color)
            .setFooter('Please enter these DNS settings in your Wii Settings to connect to Disconnect24.');
        return msg.reply({ embed });
    }
};