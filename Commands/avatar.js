module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (msg.channel.type === "dm") {
              msg.channel.send(`This command can not be run in DMs.`)
              return;
        }

        const member = msg.mentions.members.first();

        if (!suffix) {
            let ownAvatar = new Discord.RichEmbed()
                .setTitle(msg.author.tag)
                .setImage(msg.author.avatarURL)
                .setColor(color)
            msg.channel.send(ownAvatar)
            return;
        }

        if (suffix) {
            let otherAvatar = new Discord.RichEmbed()
                .setTitle(member.user.tag)
                .setImage(member.user.avatarURL)
                .setColor(color)
            msg.channel.send(otherAvatar)
            return;
        }

    }
  
  
  }
  
