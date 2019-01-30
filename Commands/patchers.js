const fs = require("fs");
const patchers = JSON.parse(fs.readFileSync("./Settings/patchers.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`These patchers can be used to connect to the Disconnect24 Service.`)
            .addField(`Mail Patcher (nwc24msg.cfg Uploader)`, patchers.mailPatcher1)
            .addField(`Mail Patcher (Homebrew Channel)`, patchers.mailPatcher2)
            .addField(`Mail Patcher (Wii Menu Channel)`, patchers.mailPatcher3)
            .setColor(color)
            .setFooter(`Want help with your patching? Feel free to check https://guide.dc24.xyz.`)

        msg.author.send(embed)
        msg.react(`✅`)

    }
  
  }
  
