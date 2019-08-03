const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
var instream = fs.createReadStream('./data/data.txt');
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
    line = JSON.parse(line);
    messages.push(line);
});

rl.on('close', function() {
   //console.log(messages);
});

app.get('/', (req, res) => {
    console.log('get site request');
});

app.get('/classes/messages', (req, res) => {
    res.type('json');
    res.send(JSON.stringify({results: messages.slice().reverse()}));
    console.log('get request');
});


app.post('/+(classes/messages)?', (req, res) => {
    messages.push(req.body);
    res.type('json');
    //console.log(messages);
    fs.appendFile('./data/data.txt', '\n' + JSON.stringify(req.body), function (err) {
        if (err) throw err;
    });
    res.send(JSON.stringify({results: messages.slice().reverse()}));
});

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));