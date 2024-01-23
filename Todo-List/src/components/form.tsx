import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface IFormProps {
  addTodoToList: (newTodo: Todo) => void;
  listLenght: number;
}

export function Form(props: IFormProps) {
  const [newTodo, setNewtodo] = useState<Todo>(new Todo(0, "", false));

  function stopSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function createNewTodo(e: ChangeEvent<HTMLInputElement>) {
    const propertyName = e.target.name;
    newTodo.id = props.listLenght + 1;
    if (e.target.type === "text") {
      setNewtodo({ ...newTodo, [propertyName]: e.target.value });
    }
    if (e.target.type === "date") {
      setNewtodo({ ...newTodo, [propertyName]: e.target.value });
    }
  }

  return (
    <>
      <form onSubmit={stopSubmit}>
        <input type="text" onChange={createNewTodo} name="text" />
        <input type="date" onChange={createNewTodo} name="date" />
        <button
          onClick={() => {
            props.addTodoToList(newTodo);
          }}
        >
          Skapa todo
        </button>
      </form>
    </>
  );
}
