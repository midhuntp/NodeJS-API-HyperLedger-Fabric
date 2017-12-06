const express = require('express');
const bodyParser = require('body-parser');
const conf = require('./config/config');
const logger = require('./utilities/logger/logger');
const client = require('./data/elasticsearch/elastic');


//Check wether elastic search connected or not
if (client) {
    client.ping({
        requestTimeout: 3000
    }, function (error) {
        if (error) {
            console.trace('Not connected to elastic search');
        } else {
            console.log('Connected with Elastic search');
        }
    });

}

//Server part
const app = express();

app.use(bodyParser.json({extend: true}));

require('./app/routes')(app, {});

//Not found
app.use(function(req, res) {
    res.status(404).send({info:'unauthorized'})
});

// Start server
app.listen(conf.app_port, () => {
    console.log('Server is running  on port ' + conf.app_port);
});