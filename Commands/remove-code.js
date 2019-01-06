const fs = require("fs");
const codes = JSON.parse(fs.readFileSync("./Settings/mail-db.json", "utf8"))
  
module.exports = {
  
      run: function(bot, config, msg, args, suffix, Discord, color) {
  
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
  
      }
    
    }
    
  
  
