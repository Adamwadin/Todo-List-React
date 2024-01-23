import { Todo } from "../models/Todo";

interface IHtmlForTodoProps {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
}

export function DisplayTodo(props: IHtmlForTodoProps) {
  function handleClick() {
    props.handleToggleTodo(props.todo.id);
  }
  return (
    <div className="todo-container">
      <h3 className="todo-container__todo">{props.todo.text}</h3>
      <input type="checkbox" checked={props.todo.isDone} disabled />
      <button className="todo-container__button" onClick={handleClick}>
        {props.todo.isDone ? "Markera som oklar" : "Markera som klar"}
      </button>
    </div>
  );
}
