const conf = require('../../config/config')
const elasticsearch = require('elasticsearch');

module.exports = new elasticsearch.Client({
    host: conf.es_url + ':' + conf.es_port,
    log: 'trace',
});