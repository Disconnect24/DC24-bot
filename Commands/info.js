module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Information`)
            .setDescription(`https://github.com/Disconnect24/Disconnect24-Bot`)
            .addField(`Developed by:`, `TheMegaEagle`)
            .addField(`Contributors:`, `None yet, however feel free to add your name with a PR if you did something significant`)
            .addField(`Running since:`, `${bot.readyAt}`)
            .addField(`Bot Invite:`, `${config.botInvite}`)
            .addField(`Disconnect24 Invite:`, `${config.serverInvite}`)
            .setColor(color)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  