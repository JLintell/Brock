var express = require('express')
var app = express();
var router = express.Router()
var path = require('path');
var bodyParser = require('body-parser')
var led;

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

router.post('/status', function (req, res) {
    led = req.body.led
    if(req.body.led){
        //led on
        console.log("on")
    }else{
        //led off
        console.log("off")
    }
})

router.get('/status', function (req, res) {
    res.send(led);
})

app.use(bodyParser.json())
app.use('/static', express.static('static'))
app.use('/', router)

var server = app.listen(5000)
