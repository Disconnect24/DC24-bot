module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {


        if (msg.channel.type === "dm") {
            msg.channel.send(`This command must be run in a server.`)
            return;
        }
        
        const member = msg.mentions.members.first();

        if (!member) {
            let ownUser = new Discord.RichEmbed()
                .setAuthor(msg.member.user.tag, msg.member.user.avatarURL, null)
                .addField(`ID:`, msg.member.user.id)
                .addField(`Account Created:`, msg.member.user.createdAt)
                .addField(`Joined Server:`, msg.member.joinedAt)
                .setColor(color)
            msg.channel.send(ownUser)
            return;
        }

        if (member) {
            let otherUser = new Discord.RichEmbed()
                .setAuthor(member.user.tag, member.user.avatarURL, null)
                .addField(`ID:`, member.user.id)
                .addField(`Account Created:`, member.user.createdAt)
                .addField(`Joined Server:`, member.joinedAt)
                .setColor(member.highestRole.hexColor)
            msg.channel.send(otherUser)
            return;
        }


    
    }
  
  
  }
  
