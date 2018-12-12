module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, color) {

      if (msg.channel.type === "dm") return msg.channel.send(`This command must be run in a server.`)
    
      const member = msg.mentions.members.first();
      var unjoined = msg.content.split(" ").slice(2);
      let reason = unjoined.join(" ")
    
      if (!msg.member.permissions.has('KICK_MEMBERS')) {
        msg.channel.send(`You do not have permission to kick.`)
        return;
      }
    
      if (!member) {
        msg.channel.send(`You must mention someone in order to use this command.`)
        return;
      } 
    
      if (msg.member.highestRole.position < member.highestRole.position) {
        msg.channel.send(`The position of your role is lower than the person you are trying to kick.`)
        return;
      } 
    
      if (msg.member.highestRole.position === member.highestRole.position) {
        msg.channel.send(prError)
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
