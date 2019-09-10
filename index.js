const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/status', (req, res) => { // new
  res.send('ok');
});

app.post('/test', (req, res) => { // new
  res.send('ok');
});
app.listen(3000, () => console.log('listening on port 3000'));

