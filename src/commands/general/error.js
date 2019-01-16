const request = require('request')
import { Command } from 'discord.js-commando';

export default class ErrorCommand extends Command {
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
        request.get('https://wiimmfi.de/error?e='+code+'&m=json')
    }
};