const fs = require("fs");
const codes = JSON.parse(fs.readFileSync("./Settings/mail-db.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        var second = msg.content.split(" ").slice(2);
        let input = second.join(" ")
        
        if (msg.channel.type === "dm") {
            msg.channel.send(`This command must be run in a server.`)
            return;
        }

        if (args[0] === "get") {
            let member = msg.mentions.members.first();
            if (!member) {
                if (!codes[msg.author.id]) {
                    msg.channel.send(`You aren't in the database.`)
                    return;
                }
                let embed = new Discord.RichEmbed()
                    .setTitle(`${msg.author.username}'s Wii Mail Code`)
                    .setDescription(`Code: ${codes[msg.author.id].code}`) 
                    .setColor(color)
                msg.channel.send(embed)
                return;
            }
            if (!codes[member.id]) {
                msg.channel.send(`This user isn't in the database.`)
                return;
            }
                let embed1 = new Discord.RichEmbed()
                    .setTitle(`${member.user.username}'s Wii Mail Code`)
                    .setDescription(`Code: ${codes[member.id].code}`) 
                    .setColor(color)
                msg.channel.send(embed1)
                return;
       }
        
       if (args[0] === "set") {
            if (!input) {
                msg.channel.send(`You must specify a mail code.`)
                return;
            }
            if (!codes[msg.author.id]) codes[msg.author.id] = {
                code: "N/A"
            }
            codes[msg.author.id].code = input
            fs.writeFile("./Settings/mail-db.json", JSON.stringify(codes), (err) => {
                if (err) console.log(err)
            })
            msg.channel.send(`Success! Your mail code "${input}" can now be found with the **\`${config.prefix}code\`** command.`)
            return;
        }
        
        if (args[0] === "remove") {
            if (!codes[msg.author.id]) {
              msg.channel.send(`You don't have a Mail Code attached to your account.`)
              return;
            }
  
            var code = msg.author.id
            delete codes[code]
  
            msg.channel.send(`Your Wii Mail Code is no longer attached.`)
            msg.react(`✅`)

            fs.writeFile("./Settings/mail-db.json", JSON.stringify(codes), (err) => {
                if (err) console.log(err)
            })
            return;
        }
        
        else {
            msg.channel.send(`Invalid argument. Please try "get", "set", or "remove".`)
            return;
        }

    }
  
  }
  
