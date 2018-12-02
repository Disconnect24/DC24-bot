const fs = require("fs");
const errors = JSON.parse(fs.readFileSync("./Settings/error-db.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (!suffix) {
            msg.channel.send(`You must specify an error.`)
            msg.react(`❌`)
            return;
        }

        if (!errors[suffix]) {
            msg.channel.send(`That error was not found in the Disconnect24 database! However, feel free to add it using a PR or by DMing a developer!`)
            msg.react(`❌`)
            return;
        }

        let embed = new Discord.RichEmbed()
            .setTitle(`Here is some info on error ${suffix}.`)
            .setDescription(errors[suffix].description)
            .addField(`How to fix:`, errors[suffix].fix)
            .setColor(color)
            .setFooter(`Do you feel this information isn't sufficient? Feel free to contribute by going to https://github.com/Disconnect24/Disconnect24-Bot.`)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  