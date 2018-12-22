const request = require('request')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        var sentfile = msg.attachments.first()
        if (!sentfile) return msg.channel.send(`You must attach a file.`)
        var url = sentfile.url
        
        let userConfig = request.get(url);

        formData: {
               uploaded_config: userConfig
            }

        request.post({url:'https://mail.service.dc24.xyz/patch', formData: {uploaded_config: userConfig}}, function optionalCallback(err, httpResponse, body) {
              if (err) {
                return console.error('upload failed:', err);
              }
              console.log('Upload successful!  Server responded with:', body);
              const buffer = request.body
              const attachment = new Attachment(buffer, 'nwc24msg.cfg');
              msg.author.send(`Mail patching complete.`, attachment);
        });

        
    }
  
  }
