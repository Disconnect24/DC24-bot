const fs = require("fs");
const codes = JSON.parse(fs.readFileSync("./Settings/mail-db.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (msg.channel.type === "dm") {
            msg.channel.send(`This command must be run in a server.`)
            msg.react(`❌`)
            return;
        }

        let member = msg.mentions.members.first();

        if (!member) {

            if (!codes[msg.author.id]) {
                msg.channel.send(`You aren't in the database.`)
                msg.react(`❌`)
                return;
            }

            let embed1 = new Discord.RichEmbed()
                .setTitle(`${msg.author.username}'s Wii Mail Code`)
                .setDescription(`Code: ${codes[msg.author.id].code}`) 
                .setColor(color)

            msg.channel.send(embed1)
            msg.react(`✅`)
            return;
        }

        if (!codes[member.id]) {
            msg.channel.send(`This user isn't in the database.`)
            msg.react(`❌`)
            return;
        }

        let embed1 = new Discord.RichEmbed()
            .setTitle(`${member.user.username}'s Wii Mail Code`)
            .setDescription(`Code: ${codes[member.id].code}`) 
            .setColor(color)

        msg.channel.send(embed1)
        msg.react(`✅`)

    }
  
  }
  