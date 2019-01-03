const fs = require("fs");
const errors = JSON.parse(fs.readFileSync("./Settings/error-db.json", "utf8"))
const error2 = JSON.parse(fs.readFileSync("./Settings/wiimmfi-error.json", "utf8"))

//const request = require('request')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (!suffix) {
            msg.channel.send(`You must specify an error.`)
            return;
        }

        if (!errors[suffix]) {
            //msg.channel.send(`That error was not found in the Disconnect24 database! However, feel free to add it using a PR or by DMing a developer!`)
            //return;
            let link = "https://wiimmfi.de/error?e=" + suffix
            let link2 = "https://wiimmfi.de/error?e=" + suffix + "&m=json"
            
            loadJSON(link2, recieved, 'jsonp')
            function recieved(data) {
                fs.writeFile("./Settings/wiimmfi-error.json", JSON.stringify(data), (err) => {
                    if (err) console.log(err)
                })
            }
            
            const error2 = JSON.parse(fs.readFileSync("./Settings/wiimmfi-error.json", "utf8"))
            
            let embed1 = new Discord.RichEmbed()
                  .setTitle(`Here is some info on error ${suffix}.`)
                  .setDescription(error2[infolist].error)
                  .setColor(color)
                  .setFooter(`This error was found using the Wiimmfi API.`)

              msg.channel.send(embed1)
            /*
            request.get({url: link}, function(err, response) {
              if (err) {
                return msg.channel.send(`Unknown Error: ${err}`);
              }
              const wiimmfierror = JSON.parse(response)

              let embed1 = new Discord.RichEmbed()
                  .setTitle(`Here is some info on error ${suffix}.`)
                  .setDescription(wiimmfierror[infolist].error)
                  .setColor(color)
                  .setFooter(`This error was found using the Wiimmfi API.`)

              msg.channel.send(embed1)
            
            });
            */
            //msg.channel.send(`This error was not found in the DC24 database. However, feel free to check Wiimmfi! ${link}`)
            //return;
        }

        let embed = new Discord.RichEmbed()
            .setTitle(`Here is some info on error ${suffix}.`)
            .setDescription(errors[suffix].description)
            .addField(`How to fix:`, errors[suffix].fix)
            .setColor(color)
            .setFooter(`Do you feel this information isn't sufficient? Feel free to contribute by going to https://github.com/Disconnect24/DC24-bot.`)

        msg.channel.send(embed)

    }
  
  }
  
