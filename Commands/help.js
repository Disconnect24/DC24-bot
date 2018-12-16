module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Main Command List`)
            .setDescription(`https://github.com/Disconnect24/DC24-bot`)
            .addField(`${config.prefix}help`, `Sends this command list.`)
            .addField(`${config.prefix}ping`, `Checks the bots connection.`)
            .addField(`${config.prefix}error`, `Looks up error info for a specified error.`)
            .addField(`${config.prefix}dns`, `Sends the DNSes for Disconnect24.`)
            .addField(`${config.prefix}patchers`, `Sends patchers that can be used to connect to Disconnect24.`)
            .addField(`${config.prefix}info`, `Sends information related to the bot.`)
            .addField(`${config.prefix}set-code`, `Allows you to add your Disconnect24 Wii Mail code to the database.`)
            .addField(`${config.prefix}stats`, `Gets the stats of DC24 services.`)
            .addField(`${config.prefix}patch`, `Allows you to patch your nwc24msg.cfg for DC24 use.`)
            .addField(`${config.prefix}code`, `Allows you to fetch a Disconnect24 Wii Mail code of either yourself or a mentioned user.`)
            .setColor(color)

        msg.author.send(embed)
        
        let embed2 = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Moderation Command List`)
            .setDescription(`https://github.com/Disconnect24/DC24-bot`)
            .addField(`${config.prefix}avatar`, `Gets the avatar or either yourself or a mentioned user.`)
            .addField(`${config.prefix}ban`, `Bans a user mentioned, if you have permissions.`)
            .addField(`${config.prefix}kick`, `Kicks a user mentioned, if you have permissions.`)
            .addField(`${config.prefix}icon`, `Gets the icon of the server you are in.`)
            .addField(`${config.prefix}server`, `Sends information about the server you are in.`)
            .addField(`${config.prefix}user`, `Gets information of either yourself or a mentioned user.`)
            .setColor(color)

        msg.author.send(embed2)
        
        msg.react(`✅`)

    }
  
  }
  
