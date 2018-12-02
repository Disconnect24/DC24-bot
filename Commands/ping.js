module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        let ping = Math.round(bot.ping)

        msg.channel.send(`:ping_pong: Ping: **${ping}ms**`)

    }
  
  }
  
