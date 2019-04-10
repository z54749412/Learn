const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log(req.method)
  const url = req.url
  req.query = querystring.parse(url.split('?')[1])
  console.log(req.query)
  res.end(JSON.stringify(req.query))
})

server.listen(5000)
console.log('server is runing at 5000')