const fs = require('fs')
let existingToDos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
let isChecked
let id

const addToDo = (body, isChecked = false, id = existingToDos.todos.length + 1) => {
  let todo = { body, isChecked, id }
  existingToDos.todos.push(todo);
  fs.writeFileSync('./todos.json', JSON.stringify(existingToDos))
};


module.exports = { addToDo, existingToDos }
