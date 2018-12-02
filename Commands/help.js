module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        let embed = new Discord.RichEmbed()
            .setTitle(`Disconnect24 Bot - Command List`)
            .setDescription(`https://github.com/Disconnect24/Disconnect24-Bot`)
            .addField(`${config.prefix}help`, `Sends this command list.`)
            .addField(`${config.prefix}ping`, `Checks the bots connection.`)
            .addField(`${config.prefix}error`, `Looks up error info for a specified error.`)
            .addField(`${config.prefix}dns`, `Sends the DNSes for Disconnect24.`)
            .addField(`${config.prefix}patchers`, `Sends patchers that can be used to connect to Disconnect24.`)
            .addField(`${config.prefix}info`, `Sends information related to the bot.`)
            .addField(`${config.prefix}set-code`, `Allows you to add your Disconnect24 Wii Mail code to the database.`)
            .addField(`${config.prefix}code`, `Allows you to fetch a Disconnect24 Wii Mail code of either yourself or a mentioned user.`)
            .setColor(color)

        msg.author.send(embed)
        msg.react(`✅`)

    }
  
  }
  