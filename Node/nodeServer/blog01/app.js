const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  const resData = {
    name: 'zs',
    site: 'sss',
    age: '18'
  }
  res.end(JSON.stringify(resData))
}

module.exports = serverHandle