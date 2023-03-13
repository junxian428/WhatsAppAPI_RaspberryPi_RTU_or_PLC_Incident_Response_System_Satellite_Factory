var express = require('express')
  , bodyParser = require('body-parser');

var app = express();
const url = 'https://graph.facebook.com/v15.0/100485976319513/messages';
const auth_token = '';
const headers = { 'Authorization': 'Bearer ' + auth_token };
const data = {
  "messaging_product": "whatsapp",    
  "recipient_type": "individual",
  "to": "",
  "type": "text",
  "text": {
    "preview_url": "false",
    "body": "Your Raspberry Pi Circuit Opened"
  }
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.get('/webhook', function(req, res) {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == 'LENGZAI'
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  //var data = JSON.stringify(request.body);
 var message = request.body.entry[0].changes[0].value.messages[0].text.body;
	console.log(message);
  if(message == "turnON"){
     console.log("send HTTP request to PLC to turn on");
    
const request = require('request');

const url = 'https://graph.facebook.com/v15.0/100485976319513/messages';
const bearerToken = '';
const body = {
  "messaging_product": "whatsapp",    
  "recipient_type": "individual",
  "to": "",
  "type": "text",
  "text": {
    "preview_url": "false",
    "body": "Your Raspberry Pi Circuit Opened"
  }
};

request.post(url, {
  headers: {
    'Authorization': `Bearer XXX`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
}, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body));
  }
});
  }
   
// Output: "this is a text m
  response.sendStatus(200);
  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
