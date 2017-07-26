const fs = require('fs')
let existingToDos
let isChecked

const addToDo = (body, isChecked = false) => {
  let todo = { body, isChecked }
  existingToDos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
  existingToDos.todos.push(todo);
  fs.writeFileSync('./todos.json', JSON.stringify(existingToDos))
};

module.exports = { addToDo, existingToDos }
