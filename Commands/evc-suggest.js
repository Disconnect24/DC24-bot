const fs = require("fs");
const details = JSON.parse(fs.readFileSync("./Settings/webhook.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        if (!suffix) {
            msg.channel.send(`You must have something written for your suggestion.`)
        }
        
        let embed = new Discord.RichEmbed()
            .setTitle(`Everybody Votes Channel Poll Suggestion`)
            .setDescription(`Suggested by ${msg.author.tag}, User ID: ${msg.author.id}`)
            .addField(`Question:`, suffix)
            .setColor(color)
        
        const webhook1 = new Discord.WebhookClient(details.evcID, details.evcToken)
        webhook1.send(embed)
        
        msg.channel.send(`Your suggestion has been sent to the developers!`)
    }
  
  }
