const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../managers/config');

export default class DNSCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'evc-suggest',
            aliases: [ 'suggest' ],
            group: 'general',
            description: 'Suggests a Everybody Votes Channel - Question/Poll Suggestion.'
        });
    }

    async run(msg, { suggest }) {
        if (!suggest) {
            return msg.reply('Please add a question/poll suggestion.')
        }

        let embed = new discord.RichEmbed()
            .setTitle(`Everybody Votes Channel Poll Suggestion`)
            .setDescription(`Suggested by **${msg.author.tag}**, User ID: **${msg.author.id}**`)
            .addField(`Question:`, `**${suggest}**`)
            .setColor(color)
        
        let webhook = new discord.WebhookClient(config.webhook.evcID, config.webhook.evcToken)
        webhook.send(embed)
        
        msg.channel.send(`Your suggestion has been sent to the developers!`)
        return msg.reply({ embed });
    }
};