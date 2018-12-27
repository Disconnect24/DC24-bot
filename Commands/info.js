module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, color) {
    bot.generateInvite(['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_MESSAGES',
                        'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY',
                        'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'])
    .then(function(link){
      let embed = new Discord.RichEmbed()
        .setTitle(`Disconnect24 Bot - Information`)
        .setDescription(`**[GitHub page](https://github.com/Disconnect24/DC24-bot)**
              Developed by: **<@${config.creatorID}>**\n
              Contributors: **Wiiの間** (Error Suggestions), **CornierKhan1** (VPS), **Apfel** (Bot improvements), Spotlight (Minor Tweaks)
              Running since: **${bot.readyAt}**`)
        .addField(`Links`, `**[Bot Invite](${link})**\n**[Disconnect24 Invite](${config.serverInvite})**`)
        .setFooter(`Become a Contributor by submitting an important pull request to our GitHub page!`)
        .setColor(color)

        msg.channel.send(embed)
    }, function(error) {
      console.error;
    });
  }
}
