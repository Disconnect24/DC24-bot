module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {



      const member = msg.mentions.members.first();
      var unjoined = msg.content.split(" ").slice(2);
      let reason = unjoined.join(" ")
    
      if (!msg.member.permissions.has('BAN_MEMBERS')) {
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
      } else if (msg.member.permissions.has('BAN_MEMBERS')) {
        msg.react(`✅`)

        let banembed = new Discord.RichEmbed()
            .setTitle(`EagleBot Moderation`)
            .setDescription(`A member has been banned!`)
            .addField(`Banned User:`, `${member.user.username}#${member.user.discriminator}`)
            .addField(`Banned By:`, `${msg.author.tag}`)
            .addField(`Reason:`, `${reason}`)
            .setThumbnail(bot.user.avatarURL)
            .setFooter(names)
            .setColor(msg.member.highestRole.hexColor)

        msg.channel.send(banembed)

        member.send(`You were banned from **${msg.guild}** by **${msg.author.tag}**! Reason: ${reason}`)
        member.ban({reason: `Banned by: ${msg.author.tag}, ${suffix}`})
              .catch(error => msg.channel.send(otError))

      }



  }
}
