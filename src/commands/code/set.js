import { Command } from 'discord.js-commando';

export default class SetCodeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'set-code',
            aliases: [ 'set', 'setcode' ],
            group: 'code',
            memberName: 'set',
            description: 'Sets your code.',
            examples: [ 'set <code>' ],
            args: [
                {
                    key: 'code',
                    prompt: 'Please enter your Wii Mail code.',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, { code }) {
        Database.Get().set('code-' + msg.author.id, code, output);
        if (output !== "OK")  return msg.reply(':x: An error occurred while setting the code.')
        else return msg.reply(':white_check_mark: Your code has been set.');
    }
};
