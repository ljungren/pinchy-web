const apiInterface = require('./interface')
const main = require('./main')

module.exports = () => {

  /*create listener on channel with
  callback on established connection and on request*/
  apiInterface.addChannelListener('pinchy_channel', () => {
    //Connection callback
    let connect = responseFactory('connect', 'pinchy-web', 'videoId', '3000');
    console.log('connection established, sends ' + connect.tag);
    apiInterface.publishMessage(connect);
  },
  (m) => {
    //response callback
    //response callback
    let channel = m.channel;
    let message = JSON.parse(m.message);

    console.log('recieved message on ' + channel + ': ' + message.tag);
    formatResponse(channel, message);

  });


  let formatResponse = (channel, message) => {
    //check tag and format response accordingly
    if(channel=='pinchy_channel'){
      let videoId = null;
      let startTime = null;
      switch(message.tag){
        case 'init':
          //Get video info from init
          videoId = parseInt(message.info.videoId);
          startTime = parseInt(message.info.time);
          //initialize video and send ready when can play
          main.initVideo(videoId, startTime, () => {
            //callback when ready
            let ready = responseFactory('ready', 'pinchy-web', videoId, startTime);
            console.log('sending ' + ready.tag);
            apiInterface.publishMessage(ready);
          });
          break;

        case 'question':
          //show question on screen

          break;

        case 'choice':
          //hide question
          //show loading screen until play
          break;
        case 'start':
          //start playing at given time

        default:
          console.log('ignoring...');
      }

      
      //...
      //do publish
      //add new listener
    }
    else{
      //...no channel
    }
  }

  let calcDiff = (timestamp) => {
    return Date.now() - parseInt(timestamp);
  }

  let addSensorListener = () => {
    //when couch sensor is triggered, send question, then listen for finger input
    console.log('listen for sensor input');
    //when finger input, send choice and info
  }
  let responseFactory = (tag, sender, videoId, time) => {
      return JSON.stringify({
        "tag": tag,
        "sender": sender,
        "info": {
          "videoId": videoId,
          "time": time
        },
        "timeStamp": Date.now()
      });
  }

//});
}
