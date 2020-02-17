const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'))

app.get('/cassettes', function (req, res) {
  res.json([
    {'title': 'Careless whisperer'},
    {'title': 'Thriller'},
    {'title': 'Ok Computer'},
    {'title': 'Cermemonials'},
    {'title': 'Call the Doctor'},
    {'title': 'Blue in Green<'}
  ])
})

app.post('/cassettes', function (req, res) {
    res.send('ok')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
