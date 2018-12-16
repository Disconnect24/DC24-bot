module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {


        if (msg.channel.type === "dm") {
            msg.channel.send(`This command must be run in a server.`)
            return;
        }
        
        if (msg.guild.iconURL) {
            let iconEmbed = new Discord.RichEmbed()
                .setAuthor(msg.guild.name, msg.guild.iconURL, null)
                .addField(`ID:`, msg.guild.id)
                .addField(`Server Created:`, msg.guild.createdAt)
                .addField(`Region:`, msg.guild.region)
                .addField(`Verification Level:`, msg.guild.verificationLevel)
                .addField(`Owner`, msg.guild.owner)
                .addField(`Members:`, msg.guild.memberCount)
                .setThumbnail(msg.guild.iconURL)
                .setColor(color)
            msg.channel.send(iconEmbed)
            return;
        }
        
        if (!msg.guild.iconURL) {
            let iconEmbed = new Discord.RichEmbed()
                .setAuthor(msg.guild.name, msg.guild.iconURL, null)
                .addField(`ID:`, msg.guild.id)
                .addField(`Server Created:`, msg.guild.createdAt)
                .addField(`Region:`, msg.guild.region)
                .addField(`Verification Level:`, msg.guild.verificationLevel)
                .addField(`Owner`, msg.guild.owner)
                .addField(`Members:`, msg.guild.memberCount)
                .setColor(color)
            msg.channel.send(iconEmbed)
            return;
        }
        
    }
  
  
  }
  
