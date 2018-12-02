const fs = require("fs");
const dns = JSON.parse(fs.readFileSync("./Settings/dns.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Here are the Disconnect24 DNS's.`)
            .addField(`Primary DNS:`, dns.primary)
            .addField(`Secondary DNS:`, dns.secondary)
            .setColor(color)
            .setFooter(`Please enter these DNS settings in your Wii Settings to connect to Disconnect24.`)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  