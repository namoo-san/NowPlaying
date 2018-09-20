var request = require('request');
const music = require('playback');

music.currentTrack((res) => {
    if (!res) {
    return;
    }

    var options = {
        url: 'YOUR_SLACK_TOKEN',
        form: 'payload={"text": "🎧 Now playing...\n\n🎼 ' + (res.artist) + " - " + (res.name) + "\n💿 " + (res.album) + "\"}",
        json :true
    };

    request.post(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
          console.log("📡 Posted");
        } else {
          console.log('error: '+ response.statusCode + body);
        }
      });

});