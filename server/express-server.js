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
    res.send(messages)
    console.log('get request');
});

app.post('/classes/messages', (req, res) => {
    messages.push(req.body);
    res.send(messages);
    console.log('post request');
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));