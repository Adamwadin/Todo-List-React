import { Todo } from "../models/Todo";
import { DisplayTodo } from "./displayTodo";

interface ITodosProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export const Todos = (props: ITodosProps) => {
  const html = props.todos.map((todo) => {
    return (
      <DisplayTodo
        todo={todo}
        handleToggleTodo={props.toggleTodo}
        key={todo.id}
      />
    );
  });

  return <>{html}</>;
};
