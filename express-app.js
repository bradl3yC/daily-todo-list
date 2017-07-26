const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const addToDo = require('./app')
const existingToDos = require('./todos.json')
const app = express()
// const todos = require('./todos.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'))

app.engine('mst', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mst')

app.get('/', (request, response) => {
  response.render('index', existingToDos)
})

app.post('/', (request, response) => {
  const toDoItem = request.body.todo
  addToDo.addToDo(toDoItem)
  response.render("index", existingToDos)
})

app.listen(3000, () => {
  console.log('All your GET requests are belong to me - on port 3000')
})
