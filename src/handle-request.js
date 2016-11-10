const routes = require('./router')
const finalhandler = require('finalhandler')

function handleRequest(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  routes(req, res, finalhandler(req, res))
}

module.exports = handleRequest
