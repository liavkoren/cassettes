const express = require('express');
const mongoIO = require('./io');
// ToDO: place your mongo Atlas url in the url module
const mongoURL = require('./url');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(express.static('static'));  // serve static files
app.use(bodyParser.urlencoded({ extended: false }));  // make request body data available

app.get('/api/cassettes', function (req, res, next) {
    function resultsCallback (err, docs) {
        if (docs) {
            res.json({'cassettesList': docs})
        } else {
            console.log('ouch');
            console.log(err);
        }
    }
    mongoIO.read(mongoURL.url, resultsCallback);
})

app.post('/api/cassettes', function (req, res, next) {
    if (req.body.add_cassette) {
        try {
            mongoIO.write(
                mongoURL.url,
                {'title': req.body.add_cassette}
            )
        } catch (e) {
            next(`Ouch! ${e}`);
        }
        res.redirect('/cassettes.html')
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
