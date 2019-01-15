const fs = require("fs");
const errors = JSON.parse(fs.readFileSync("./Settings/error-db.json", "utf8"))
const request = require('request')
const webhooks = JSON.parse(fs.readFileSync("./Settings/webhook.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (!suffix) {
            msg.channel.send(`You must specify an error.`)
            return;
        }

        if (!errors[suffix]) {
            const webhook1 = new Discord.WebhookClient(webhooks.errorID, webhooks.errorToken)
            msg.channel.send(`That error was not found in the Disconnect24 database! However, it will be added soon! This unknown error code has been reported to the developers.`)
            webhook1.send(`Error **${suffix}** was found by **${msg.author.tag}** and is not currently in the database.`)
            return;
        }

        let embed = new Discord.RichEmbed()
            .setTitle(`Here is some info on error ${suffix}.`)
            .setDescription(errors[suffix].description)
            .addField(`How to fix:`, errors[suffix].fix)
            .setColor(color)
            .setFooter(`Do you feel this information isn't sufficient? Feel free to contribute by going to https://github.com/Disconnect24/DC24-bot.`)

        msg.channel.send(embed)

    }
  
  }
  
