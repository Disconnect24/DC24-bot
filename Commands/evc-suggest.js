const fs = require("fs");
const details = JSON.parse(fs.readFileSync("./Settings/webhook.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        if (!suffix) {
            msg.channel.send(`You must have something written for your suggestion.`)
        }
        
        const webhook1 = new Discord.WebhookClient(details.id, details.token)
        webhook1.send(`${msg.author.tag} (User ID: ${msg.author.id}) has suggested "${suffix}" as a new Everybody Votes Channel question!`)

        msg.channel.send(`Your suggestion has been sent to the developers!`)
    }
  
  }
