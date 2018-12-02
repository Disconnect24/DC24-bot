module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Information`)
            .setDescription(`https://github.com/Disconnect24/DC24-bot`)
            .addField(`Developed by:`, `TheMegaEagle`)
            .addField(`Contributors:`, `Wiiの間 and CornierKhan1-- Get added to this list by submitting a significant pull request!`)
            .addField(`Running since:`, `${bot.readyAt}`)
            .addField(`Bot Invite:`, `${config.botInvite}`)
            .addField(`Disconnect24 Invite:`, `${config.serverInvite}`)
            .setColor(color)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  
