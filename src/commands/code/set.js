const commando = require('discord.js-commando');

module.exports = class SetCodeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'set-code',
            aliases: [ 'set', 'setcode' ],
            group: 'code',
            memberName: 'set',
            description: 'Sets your code.',
            examples: [ 'set <code>' ],
        });
    }

    async run(msg, args) { }
};
