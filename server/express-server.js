const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

const messages = [];
app.get('/classes/messages', (req, res) => {
    res.type('json');
    res.send(JSON.stringify({'results': messages}));
    console.log('get request');
});

app.post('/classes/messages', (req, res) => {
    messages.unshift(req.body);
    res.type('json');
    res.send(JSON.stringify({'results': messages}));
    console.log('post request');
    console.log(messages);
});

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));