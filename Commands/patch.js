const request = require('request')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {

        if (msg.channel.type === "text") {
            msg.channel.send(`This command must be run in DM, since your nwc24msg.cfg has private information.`)
            msg.delete()
            return;
        }
        
        var sentfile = msg.attachments.first()
        if (!sentfile) return msg.channel.send(`You must attach a file.`)
        var url = sentfile.url
        
        let userConfig = request.get(url);

        request.post({url:'https://mail.service.dc24.xyz/patch', headers: { 'Content-Type': 'multipart/form-data', 'Boundary': '----WebKitFormBoundarytUArugCRlbmMdP4C
' }, formData: {uploaded_config: userConfig}}, function optionalCallback(err, httpResponse, body) {
              if (err) {
                return msg.channel.send(`Upload failed: ${err}`);
              }
              var buffer = Buffer.from(JSON.stringify(body));
              const attachment = new Discord.Attachment(buffer, 'nwc24msg.cfg');
              msg.author.send(`Mail patching complete.`, attachment);
        });

        
    }
  
  }
