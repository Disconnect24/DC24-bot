const fs = require("fs");
const stats = JSON.parse(fs.readFileSync("./Settings/stats.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Service Stats`)
            .addField(`Mail`, stats.mail)
            .addField(`Check Mii Out Channel`, stats.cmoc)
            .setColor(color)

        msg.channel.send(embed)

    }
  
  }
  
