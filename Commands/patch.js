const axios = require('axios')
const download = require('download-file')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        var url = "https://github.com/RiiConnect24-Bot/RC24-Bot/raw/5ef38c7146a9fe6a0edc977399de20cc64c10acc/src/test/resources/correct_orig.cfg"
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
