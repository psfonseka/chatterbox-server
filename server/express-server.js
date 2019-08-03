const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
var instream = fs.createReadStream('./data/data.json');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

const htmlPath = path.join(__dirname + '/client');
console.log(htmlPath);
app.use(express.static(htmlPath));



let messages = [];

rl.on('line', function(line) {
    // process line here
    messages.push(line);
});

rl.on('close', function() {
    // do something on finish here
   // console.log('arr', messages);
   messages = JSON.parse(messages);
});

app.get('/', (req, res) => {
    console.log('get site request');
});

app.get('/classes/messages', (req, res) => {
    res.type('json');
    res.send(JSON.stringify({'results': messages}));
    console.log('get request');
});


app.post('/+(classes/messages)?', (req, res) => {
    messages.unshift(req.body);
    res.type('json');
    console.log(messages);
    res.send(JSON.stringify({'results': messages}));
    // var jsonData = JSON.stringify(messages.slice());
    // console.log(messages);
    // console.log(jsonData);
    // fs.writeFile("./data/data.json", jsonData, function(err) {
    // res.json({ success: true });
    // });
    // console.log('post request');
});

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));