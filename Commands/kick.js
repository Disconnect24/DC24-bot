module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {


      const member = msg.mentions.members.first();
      var unjoined = msg.content.split(" ").slice(2);
      let reason = unjoined.join(" ")
    
      if (!msg.member.permissions.has('KICK_MEMBERS')) {
        msg.channel.send(prError).then(function(m) {
          sleep(2000)
          m.delete()
      })
        msg.react(`❌`)
        return;
      } else if (!member) {
        msg.channel.send(mbError).then(function(m) {
          sleep(2000)
          m.delete()
      })
        msg.react(`❌`)
        return;
      } else if (msg.member.highestRole.position < member.highestRole.position) {
        msg.channel.send(prError).then(function(m) {
          sleep(2000)
          m.delete()
      })
        msg.react(`❌`)
        return;
      } else if (msg.member.highestRole.position === member.highestRole.position) {
        msg.channel.send(prError).then(function(m) {
          sleep(2000)
          m.delete()
      })
        msg.react(`❌`)
        return;
      } else if (msg.member.permissions.has('KICK_MEMBERS')) {
        msg.react(`✅`)

        let kickembed = new Discord.RichEmbed()
            .setTitle(`EagleBot Moderation`)
            .setDescription(`A member has been kicked!`)
            .addField(`Kicked User:`, `${member.user.username}#${member.user.discriminator}`)
            .addField(`Kicked By:`, `${msg.author.tag}`)
            .addField(`Reason:`, `${reason}`)
            .setThumbnail(bot.user.avatarURL)
            .setFooter(names)
            .setColor(msg.member.highestRole.hexColor)

        msg.channel.send(kickembed)

        member.send(`You were kicked from **${msg.guild}** by **${msg.author.tag}**! Reason: ${reason}`)
        member.kick(`Kicked by: ${msg.author.tag}, ${reason}`)
              .catch(error => msg.author.send(otError))

      }

   

  }

}
