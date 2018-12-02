const fs = require("fs");
const patchers = JSON.parse(fs.readFileSync("./Settings/patchers.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Looking for Disconnect24 Patchers, huh? Well you're in the right place.`)
            .addField(`Mail Patcher (nwc24msg.cfg Uploader)`, patchers.mailPatcher1)
            .addField(`Mail Patcher (Homebrew Channel)`, patchers.mailPatcher2)
            .setColor(color)
            .setFooter(`More patchers will be added as they are developed.`)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  