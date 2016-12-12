var CronJob = require('cron').CronJob;
const db = require('../db');
const dbModels = require('../db/index.js');

var accountSid = 'AC4d6654e30b96d8216b289b5cdcc918e9'; 
var authToken = '6f2e5c9ffa8f5d3ba10438c4d0b4d9bf';
//DONT COMMIT THESE

var client = require('twilio')(accountSid, authToken); 

var job = new CronJob('10 * * * * *', 
  function() {
    dbModels.ReminderTable.findOne({order: [['when']]})
    .then(function(reminder) {
      console.log(reminder);
      var now = new Date();
      var reminderDate = new Date(reminder.when);
      console.log(now, reminderDate);
      if (now >= reminderDate) {
        console.log('about to send to twilio');
        client.sendMessage({ 
          to: reminder.phoneNumber, 
          from: '+19786753367 ', 
          body: reminder.msg,
        }, function(err, responseData) { //this function is executed when a response is received from Twilio
          if (!err) { // "err" is an error received during the request, if any
            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
            reminder.destroy();
          }
        });
      }
    });
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Los_Angeles'
);