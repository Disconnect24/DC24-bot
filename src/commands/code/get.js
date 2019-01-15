const commando = require('discord.js-commando');

module.exports = class GetCodeCommand extends commando.Command {
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

    async run(msg, args) { }
};
