const fs = require('fs')
let existingToDos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
let isChecked
let id

const writeTodos = () => {
  fs.writeFileSync('./todos.json', JSON.stringify(existingToDos))
}

const addToDo = (body, isChecked = "unchecked", id = existingToDos.todos.length + 1) => {
  let todo = { body, isChecked, id }
  existingToDos.todos.push(todo);

  writeTodos()
}

const readTodos = () => JSON.parse(fs.readFileSync('./todos.json').toString())

const toggleTodo = (todoId) => {
  let currentTodo = existingToDos.todos.find(todo => todo.id === todoId)

  currentTodo.isChecked = currentTodo.isChecked === "checked" ? "unchecked" : "checked"

  writeTodos()
}

module.exports = { addToDo, existingToDos, readTodos, toggleTodo }
