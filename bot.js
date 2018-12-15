const Discord = new require(`discord.js`)
const bot = new Discord.Client()

const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./Settings/config.json", "utf8"))
const auth = JSON.parse(fs.readFileSync("./Settings/auth.json", "utf8"))

bot.login(auth.token)

var status = `Use ${config.prefix}help | DC24 Bot v1.3.2`
var color = `#BA68C8`

bot.on('ready', function() {
    console.log(`${bot.user.tag} is online and running!`)
    bot.user.setActivity(status)
})

bot.on('message', function(msg) {
    var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase()
    var args = msg.content.split(" ").slice(1);
    let suffix = args.join(" ")

    if(msg.author.bot || !msg.content.startsWith(config.prefix)) {
        return;
    }

    if (command === "patchers") {
        require(`./Commands/patchers.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "dns") {
        require(`./Commands/dns.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "error") {
        require(`./Commands/error.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "help") {
        require(`./Commands/help.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "ping") {
        require(`./Commands/ping.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "info") {
        require(`./Commands/info.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "set-code") {
        require(`./Commands/setcode.js`).run(bot, config, msg, args, suffix, Discord, color)
    }

    if (command === "code") {
        require(`./Commands/code.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "eval") {
        require(`./Commands/eval.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "avatar") {
        require(`./Commands/avatar.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "ban") {
        require(`./Commands/ban.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "kick") {
        require(`./Commands/kick.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "icon") {
        require(`./Commands/icon.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "server") {
        require(`./Commands/server.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "user") {
        require(`./Commands/user.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
    
    if (command === "stats") {
        require(`./Commands/stats.js`).run(bot, config, msg, args, suffix, Discord, color)
    }
})
