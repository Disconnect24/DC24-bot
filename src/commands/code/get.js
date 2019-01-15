import { Command } from 'discord.js-commando';

export default class GetCodeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'get-code',
            aliases: [ 'get', 'getcode' ],
            group: 'code',
            memberName: 'get',
            description: 'Retrieves the code for the user.',
            examples: [ 'get <user>' ],
        });
    }

    async run(msg, args) {
        if (args === null) return msg.reply(':warning: Please provide a user.');
        let member = msg.mentions.members.first();
        Database.Get().get('code-' + member.id, output);
        if (output === null)  return msg.reply(':x: The user **' + member.tag + '** have not set their code yet.')
        else return msg.reply('The code for the user **' + member.tag + '** is ' + output + '`.');
    }
};
