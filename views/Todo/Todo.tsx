// import styles from './Todo.module.css';
import { Todo as TodoModel, TodoItem } from '../../modules/todo';

export interface TodoProps {
  todo: TodoModel | null;
}

export default function Todo({ todo }: TodoProps) {
  if (todo === null) {
    return <h1>Todo not found</h1>;
  }

  return <TodoItem item={todo} />;
}
