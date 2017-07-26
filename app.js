const fs = require('fs')

const addToDo = (title, body) => {
  let todos = [];
  let todo = { todo };

  todos.push(todo);
  fs.writeFileSync('todos.json', JSON.stringify(todos));

  const existingToDos = fs.readFileSync('todos.json');
  notes = JSON.parse(existingToDos);

};

module.exports = { addToDo }
