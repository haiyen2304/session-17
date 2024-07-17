const todoList = [
  { id: 1, todo: "Have breakfast", completed: false },
  { id: 2, todo: "Have breakfast", completed: true },
  { id: 3, todo: "Have breakfast", completed: false },
];
function addTodo(todo) {
  let newld = 0;
  for (let i = 0; i < todoList.length; i++) {
    newld = todoList.length + 1;
  }

  let newTodo = {
    id: newld,
    todo: todo,
    completed: false,
  };
  todoList.push(newTodo);
}

// addTodo("đi tắm");
// console.log(todoList);

function updateTodo(id) {
  let findIndex = todoList.findIndex(function (element, index) {
    return element.id == id;
  });
  todoList[findIndex].completed = true;
}
// updateTodo(3);
// console.log(todoList);

// bước 4:
function removeTodo(id) {
  let check = -1;
  for (let i = 0; i < todoList.length; i++) {
    if (id == todoList[i].id) {
      check = i;
      break;
    }
  }
  if (check == -1) {
    console.log(`Không tìm thấy công việc với id ${id}`);
    return;
  }

  todoList.splice(check, 1);
}
removeTodo(5);
console.log(todoList);
