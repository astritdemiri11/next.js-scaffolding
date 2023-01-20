// import styles from './Server.module.css';
import { Todo, Todos } from '../../modules/todo';

export interface ServerProps {
  todos: Todo[];
}

export default function Server({ todos }: ServerProps) {
  return <Todos items={todos} />;
}
