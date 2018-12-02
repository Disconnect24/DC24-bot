module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Ping`)
            .setDescription(`This took ${bot.ping}ms to execute.`)
            .setColor(color)

        msg.channel.send(embed)
        msg.react(`✅`)

    }
  
  }
  