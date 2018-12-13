module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (msg.channel.type === "dm") {
              msg.channel.send(`This command must be run in a server.`)
              return;
        }
        
        let iconEmbed = new Discord.RichEmbed()
            .setTitle(msg.guild.name)
            .setImage(msg.guild.iconURL)
            .setColor(color)
        msg.channel.send(iconEmbed)

    }
  
  
  }
  
