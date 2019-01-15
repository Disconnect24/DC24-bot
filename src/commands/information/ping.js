module.exports = {
    run: function(bot, msg) {
        msg.channel.send(`:ping_pong: Pong! **${Math.round(bot.ping)}ms**`)
    }
}