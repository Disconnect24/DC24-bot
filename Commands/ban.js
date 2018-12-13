module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, color) {

      if (msg.channel.type === "dm") return msg.channel.send(`This command must be run in a server.`)

      const member = msg.mentions.members.first();
      var unjoined = msg.content.split(" ").slice(2);
      let reason = unjoined.join(" ")
    
      if (!msg.member.permissions.has('BAN_MEMBERS')) {
        msg.channel.send(`You do not have permission to ban members.`)
        return;
      } 

      if (!member) {
        msg.channel.send(`You must mention someone to run that command.`)
        return;
      } 
    
      if (msg.member.highestRole.position < member.highestRole.position) {
        msg.channel.send(`Your role position is lower than the person you are trying to ban.`)
        return;
      } 
      
      if (msg.member.highestRole.position === member.highestRole.position) {
        msg.channel.send(`Your role position is the same as the person you are trying to ban.`)
        return;
      } 
    
      if (msg.member.permissions.has('BAN_MEMBERS')) {

        let banEmbed = new Discord.RichEmbed()
            .setTitle(`Success!`)
            .setDescription(`${member.user.username}#${member.user.discriminator} was banned by ${msg.author.tag}.`)
            .setColor(color)

        msg.channel.send(banEmbed)

        member.ban({reason: `Banned by: ${msg.author.tag}, ${reason}`})
              .catch(error => msg.channel.send(`Unknown Error`))

      }



  }
}
