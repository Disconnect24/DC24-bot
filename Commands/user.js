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
            let ownUser = new Discord.RichEmbed()
                .setAuthor(msg.member.user.tag, msg.member.user.avatarURL, null)
                .addField(`Username:`, msg.member.user.username)
                .addField(`Nickname:`, msg.member.nickname)
                .addField(`Tag:`, msg.member.user.discriminator)
                .addField(`ID:`, msg.member.user.id)
                .addField(`Account Created:`, msg.member.user.createdAt)
                .addField(`Joined Server:`, msg.member.joinedAt)
                //.addField(`Game:`, msg.member.user.presence.game.name)
                .addField(`Requested In:`, msg.guild.name)
                .setColor(msg.member.highestRole.hexColor)
                .setThumbnail(bot.user.avatarURL)
                .setFooter(names)
            msg.channel.send(ownUser)
            return;
        }

        if (suffix) {
            let otherUser = new Discord.RichEmbed()
                .setAuthor(member.user.tag, member.user.avatarURL, null)
                .addField(`Username:`, member.user.username)
                .addField(`Nickname:`, member.nickname)
                .addField(`Tag:`, member.user.discriminator)
                .addField(`ID:`, member.user.id)
                .addField(`Account Created:`, member.user.createdAt)
                .addField(`Joined Server:`, member.joinedAt)
                //.addField(`Game:`, member.user.presence.game.name)
                .addField(`Requested In:`, msg.guild.name)
                .setColor(member.highestRole.hexColor)
                .setThumbnail(bot.user.avatarURL)
                .setFooter(names)
            msg.channel.send(otherUser)
            return;
        }


    
    }
  
  
  }
  