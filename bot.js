var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
//var sleep = require('sleep');


var T = new Twit({
  consumer_key: "",
 consumer_secret: "",
 access_token: "",
 access_token_secret: ""
})


var Bot = new TwitterBot({
 consumer_key: "",
 consumer_secret: "",
 access_token: "",
 access_token_secret: ""
});

T.get('trends/place', { id: 1 }, function(err, data, response) {
     for (var i in data[0].trends) {
          var hash_trend = data[0].trends[i].name;
          var custom_message = "Your Custom message";
            Bot.tweet(hash_trend + custom_message);


     }
})
