import { useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { Todos } from "./components/Todos";
import { Form } from "./components/form";

function App() {
  const [toDoList, setToDoList] = useState<Todo[]>([]);
  let listLenght: number = toDoList.length;
  function toggleTodo(todoId: number) {
    setToDoList(
      toDoList.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  }

  function addTodoToList(newTodo: Todo) {
    setToDoList([...toDoList, newTodo]);
    listLenght = toDoList.length + 1;

    console.log(toDoList);
  }

  return (
    <>
      <Form addTodoToList={addTodoToList} listLenght={listLenght} />
      <div className="main-wrapper">
        <Todos todos={toDoList} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}

export default App;
