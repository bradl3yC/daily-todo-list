const express = require('express')
const mustacheExpress = require('mustache-express')
const addToDo = require('./app.js')

const app = express()

app.use(express.static('public'))

app.engine('mst', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mst')

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(3000, () => {
  console.log('All your GET requests are belong to me - on port 3000')
})
