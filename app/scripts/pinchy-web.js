const apiInterface = require('./interface')
const main = require('./main')

let initialize = () => {

  main.ready;
  /*create listener on channel with
  callback on established connection and on received message*/
  apiInterface.addChannelListener('pinchy_channel', () => {
    //Connection callback
    let connect = responseFactory('connect', 'pinchy-web', null, null);
    console.log('connection established, sends connect');
    apiInterface.publishMessage(connect);
  },
  (m) => {
    //response callback
    let channel = m.channel;
    let message = JSON.parse(m.message);

    console.log('recieved message on ' + channel + ': ' + message.tag);
    formatResponse(channel, message);
  });
}

module.exports = {
  init: initialize()
}

let formatResponse = (channel, message) => {
    //check tag and format response accordingly
    if(channel=='pinchy_channel'){
      let videoId = null;
      let startTime = null;
      switch(message.tag){
        case 'init':
          //Get video info from init
          videoId = message.info.videoId;
          startTime = parseInt(message.info.time);
          //initialize video and send ready when can play
          main.initVideo(videoId, startTime, () => {
            //callback when ready
            let ready = responseFactory('ready', 'pinchy-web', videoId, startTime);
            console.log('sending ready');
            apiInterface.publishMessage(ready);
          });
          break;

        case 'question':
          //show question on screen
          main.showQuestion();
          break;

        case 'choice':
          let decision = message.info.choice;
          if(decision=='yes'){
            //start loading animation until video starts
            main.pulse();
          }else{
            //hide question
            main.hideQuestion();
          }
          break;
        case 'start':
          startTime = parseInt(message.info.time);
          console.log('startTime: ' + startTime);
          main.playVideo(startTime);

        default:
          console.log('ignoring...');
      }

    }
    else{
      //...no channel
    }
}

let calcDiff = (timestamp) => {
  return Date.now() - parseInt(timestamp);
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

