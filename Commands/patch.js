const request = require('request')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        var url = msg.attachments.first().url
        let userConfig = request.get(url);
        request.put('https://mail.service.dc24.xyz/patch', {
            formData: {
               uploaded_config: userConfig
            }
        })
        .on('response', (response) => {
            msg.channel.send(response.statusCode);
            console.log('response', response);
        })
        .on('error', (err) => {
            console.log(err);
         });
        
    }
  
  }
