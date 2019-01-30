module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (suffix === "get") {
            require(`./Commands/code-cmd/get.js`).run(bot, config, msg, args, suffix, Discord, color)
        }
        
        if (suffix === "set") {
            require(`./Commands/code-cmd/set.js`).run(bot, config, msg, args, suffix, Discord, color)
        }
        
        if (suffix === "remove") {
            require(`./Commands/code-cmd/remove.js`).run(bot, config, msg, args, suffix, Discord, color)
        }

    }
  
  }
  
