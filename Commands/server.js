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

        
            let ownUser = new Discord.RichEmbed()
                .setAuthor(msg.guild.name, msg.guild.iconURL, null)
                .addField(`Name:`, msg.guild.name)
                .addField(`ID:`, msg.guild.id)
                .addField(`Server Created:`, msg.guild.createdAt)
                .addField(`Region:`, msg.guild.region)
                .addField(`Verification Level:`, msg.guild.verificationLevel)
                .addField(`Owner`, msg.guild.owner)
                .addField(`Members:`, msg.guild.memberCount)
                .setColor(msg.member.highestRole.hexColor)
                .setThumbnail(bot.user.avatarURL)
                .setFooter(names)
            msg.channel.send(ownUser)
            return;
        

    }
  
  
  }
  