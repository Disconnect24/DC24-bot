const fs = require("fs");
const codes = JSON.parse(fs.readFileSync("./Settings/mail-db.json", "utf8"))

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (!suffix) {
            msg.channel.send(`You must specify a mail code.`)
            return;
        }

        if (!codes[msg.author.id]) codes[msg.author.id] = {
            code: "N/A"
        }

        codes[msg.author.id].code = suffix

        fs.writeFile("./Settings/mail-db.json", JSON.stringify(codes), (err) => {
            if (err) console.log(err)
        })

        msg.channel.send(`Success! Your mail code "${suffix}" can now be found with the **\`${config.prefix}code\`** command.`)

    }
  
  }
