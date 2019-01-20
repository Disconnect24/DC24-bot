const commando = require('discord.js-commando');
const Database = require('../../managers/database')

export default class RemoveCodeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'remove-code',
            aliases: [ 'remove', 'removecode' ],
            group: 'code',
            memberName: 'remove',
            description: 'Removes your current code.'
        });
    }

    async run(msg) {
        Database.Get().del('code-', msg.author.id, output);
        if (output < 1) return msg.reply(':x: An error occurred when removing your code.');
        else return msg.reply(':white_check_mark: Your code has been removed.');
    }
};
