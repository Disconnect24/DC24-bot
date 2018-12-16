const axios = require('axios')

module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, color) {
        
        axios.post('https://mail.service.dc24.xyz/patch', {
          uploaded_config: 'msg.attachments.first().url'
        })
        .then((res) => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res)
        })
        .catch((error) => {
          msg.channel.send(error)
        })
        
    }
  
  }
