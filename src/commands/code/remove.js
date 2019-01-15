const commando = require('discord.js-commando');

module.exports = class GetCodeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'remove-code',
            aliases: [ 'remove', 'removecode' ],
            group: 'code',
            memberName: 'remove',
            description: 'Removes your current code.'
        });
    }

    async run(msg, args) { }
};
