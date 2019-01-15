module.exports = {

  run: function(msg, Discord, color) {

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
        msg.channel.send(`You are the same role as the person you are trying to kick.`)
        return;
      } 
      
      if (msg.member.permissions.has('KICK_MEMBERS')) {
        
        let kickEmbed = new Discord.RichEmbed()
            .setTitle(`Success!`)
            .setDescription(`${member.user.username}#${member.user.discriminator} was kicked by ${msg.author.tag}.`)
            .setColor(color)

        msg.channel.send(kickEmbed)

        member.kick({reason: `Kicked by: ${msg.author.tag}, ${reason}`})
              .catch(error => msg.channel.send(`Unknown Error`))

      }

   

  }

}
