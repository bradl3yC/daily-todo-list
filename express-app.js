const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const appHelper = require('./app')
const app = express()
const fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'))

app.engine('mst', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mst')

app.get('/', (request, response) => {
  response.render('index', appHelper.readTodos())
})

app.post('/create', (request, response) => {
  const toDoItem = request.body.todo
  appHelper.addToDo(toDoItem)
  response.redirect('/')
})

app.post('/complete/:id', (request, response) => {
  const todoId = parseInt(request.params.id)
  appHelper.toggleTodo(todoId)
  response.redirect('/')
})

app.listen(3000, () => {
  console.log('All your requests are belong to us - on port 3000')
})
