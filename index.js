const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(function(req, res, next) {
  console.log('second middleware')
  next()
})

app.get('/', function (req, res) {
  res.sendFile('my first response')
})

app.get('/about/:name', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('faq page')
})

app.post('/')

app.listen(3000, function () {
  console.log('express is running on port 3000')
})
