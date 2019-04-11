const http = require('http')

const PORT = 50000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)

server.listen(PORT)
console.log('server is running...')