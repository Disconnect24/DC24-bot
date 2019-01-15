import { Command } from 'discord.js-commando';

export default class RemoveCodeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'remove-code',
            aliases: [ 'remove', 'removecode' ],
            group: 'code',
            memberName: 'remove',
            description: 'Removes your current code.'
        });
    }

    async run(msg, args) {
        Database.Get().del('code-', msg.author.id, output);
        if (output < 1) return msg.reply(':x: An error occurred when removing your code.');
        else return msg.reply(':white_check_mark: Your code has been removed.');
    }
};
