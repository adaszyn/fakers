const routes = require('./router')
const finalhandler = require('finalhandler')

function handleRequest(req, res){
  routes(req, res, finalhandler(req, res))
}

module.exports = handleRequest
