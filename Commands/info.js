module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Information`)
            .setDescription(`https://github.com/Disconnect24/DC24-bot`)
            .addField(`Developed by:`, `TheMegaEagle`)
            .addField(`Contributors:`, `Wiiの間 (Error Suggestions), CornierKhan1 (VPS), Apfel (Important Suggestions)`)
            .addField(`Running since:`, `${bot.readyAt}`)
            .addField(`Bot Invite:`, `${config.botInvite}`)
            .addField(`Disconnect24 Invite:`, `${config.serverInvite}`)
            .setFooter(`Become a Contributor by submitting an important pull request to our github page! (https://github.com/Disconnect24/DC24-bot)`)
            .setColor(color)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  
