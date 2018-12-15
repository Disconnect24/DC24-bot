const fs = require("fs");
const stats = JSON.parse(fs.readFileSync("./Settings/stats.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Service Stats`)
            .addField(`Mail:`, stats.mail)
            .addField(`Check Mii Out Channel:`, stats.cmoc)
            .addField(`Disconnect24 Channel:`, stats.dc24channel)
            .addField(`Nintendo Channel:`, stats.nc)
            .addField(`Everybody Votes Channel:`, stats.evc)
            .addField(`Forecast Channel:`, stats.fore)
            .addField(`News Channel:`, stats.news)
            .addField(`Wii Speak Channel:`, stats.speak)
            .addField(`Miiverse:`, stats.miiverse)
            .addField(`Japanese Channels:`, stats.japan)
            .setColor(color)

        msg.channel.send(embed)

    }
  
  }
  
