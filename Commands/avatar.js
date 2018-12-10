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

        const member = msg.mentions.members.first();

        if (!suffix) {
            let ownAvatar = new Discord.RichEmbed()
                .setTitle(msg.author.tag)
                .setImage(msg.author.avatarURL)
                .setColor(msg.member.highestRole.hexColor)
                .setFooter(names)
            msg.channel.send(ownAvatar)
            return;
        }

        if (suffix) {
            let otherAvatar = new Discord.RichEmbed()
                .setTitle(member.user.tag)
                .setImage(member.user.avatarURL)
                .setColor(member.highestRole.hexColor)
                .setFooter(names)
            msg.channel.send(otherAvatar)
            return;
        }

    }
  
  
  }
  