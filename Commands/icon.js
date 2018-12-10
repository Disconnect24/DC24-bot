module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        if (msg.channel.type === "dm") {
              msg.react(`❌`)
              msg.channel.send(dmError).then(function(m) {
                sleep(2000)
                m.delete()
              })
              return;
        }

        if (msg.channel.type === "text") {
            msg.react(`✅`)
        } 

        

        
        let iconEmb = new Discord.RichEmbed()
            .setTitle(msg.guild.name)
            .setImage(msg.guild.iconURL)
            .setColor(msg.member.highestRole.hexColor)
            .setFooter(names)
        msg.channel.send(iconEmb)
        return;
        

    }
  
  
  }
  