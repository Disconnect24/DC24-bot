const commando = require('discord.js-commando');

export default class GetCodeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'get-code',
            aliases: [ 'get', 'getcode' ],
            group: 'code',
            memberName: 'get',
            description: 'Retrieves the code for the user.',
            examples: [ 'get <user>' ],
            args: [
                {
                    key: 'user',
                    prompt: 'Please enter a user to search for.',
                    type: 'member'
                }
            ]
        });
    }

    async run(msg, { user }) {
        Database.Get().get('code-' + user.id, output);
        if (output === null)  return msg.reply(':x: The user **' + user.tag + '** have not set their code yet.')
        else return msg.reply('The code for the user **' + user.tag + '** is ' + output + '`.');
    }
};
