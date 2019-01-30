const commando = require('discord.js-commando');
const discord = require('discord.js');
const request = require('request');

export default class ErrorCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'error',
            aliases: [ 'errorcode' ],
            group: 'general',
            description: 'Searches up error codes, and if we have informations, will help you fix your issue.',
            args: [
                {
                    key: 'code',
                    prompt: 'Please enter a code.',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, { code }) {
        let json = JSON.parse(request.get('https://wiimmfi.de/error?e='+code+'&m=json'));
        if (json === null) {
            return msg.reply(':x: We couldn`t find that error code.');
        }
        else if (json[0].found === 0)  {
            return msg.reply(':x: We couldn`t find that error code.');
        }
        else {
            let embed = new discord.RichEmbed().setTitle('Error description for Error ' + error[0].error)
                .addField('Class info:', '**' + error[0].infolist[0].info + '** (' + error[0].infolist[0].name + ')', false)
                .addField('Section info:', '**' + error[0].infolist[1].info + '** (' + error[0].infolist[1].name + ')', false)
                .addField('Error info:', '**' + error[0].infolist[2].info + '** (' + error[0].infolist[2].name + ')', false);
            return msg.reply({ embed });
        }
    }
};