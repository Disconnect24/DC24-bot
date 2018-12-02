module.exports = {

    run: function(bot, config, msg, args, suffix, Discord) {
    
        if (msg.author.id === config.creatorID) {
            if (msg.author.id !== config.creatorID) return;

            const code = suffix;
            let evaled = eval(code);

            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

            msg.channel.send(evaled)
            
        }

        if (msg.author.id === config.khanID) {
            if (msg.author.id !== config.khanID) return;

            const code1 = suffix;
            let evaled1 = eval(code1);

            if (typeof evaled1 !== "string")
            evaled1 = require("util").inspect(evaled1);

            msg.channel.send(evaled1)
            
        }

    }
  
  
  }
  
