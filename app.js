//config
const PORT = 3010
//server
const http = require('http')
const handleRequest = require('./src/handle-request')
const server = http.createServer(handleRequest)
//debug
const debug = require('debug')('fakers:app')

//start server
server.listen(PORT, ()=> {
  debug('server started on port', PORT)
})
