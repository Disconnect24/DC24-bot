const fs = require("fs");
const Config = require('../../managers/config.js');
const details = new Config().load.patchers;

module.exports = {

    run: function(msg, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`These patchers can be used to connect to the Disconnect24 Service.`)
            .addField(`Mail Patcher (nwc24msg.cfg Uploader)`, patchers.mailPatcher1)
            .addField(`Mail Patcher (Homebrew Channel)`, patchers.mailPatcher2)
            .addField(`Mail Patcher (Wii Menu Channel)`, patchers.mailPatcher3)
            .setColor(color)
            .setFooter(`More patchers will be added as they are developed.`)

        msg.author.send(embed)
        msg.react(`✅`)

    }
  }
