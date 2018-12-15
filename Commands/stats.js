const fs = require("fs");
const stats = JSON.parse(fs.readFileSync("./Settings/stats.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Service Stats`)
            .setDescription(`Check Mii Out Channel: **{stats.cmoc}**\n
            Disconnect24 Channel: **{stats.dc24channel}**\n
            Everybody Votes Channel: **{stats.evc}**\n
            Forecast Channel: **{stats.fore}**\n
            Japanese Channels: **{stats.japan}**\n
            Mail: **{stats.mail}**\n
            Miiverse: **{stats.miiverse}**\n
            News Channel: **{stats.news}**\n
            Nintendo Channel: **{stats.nc}**\n
            Wii Speak Channel: **{stats.speak}**`)
            .setColor(color)

        msg.channel.send(embed)

    }
  
  }
  
