// import styles from './Home.module.css';
import { Todo, Todos } from '../../modules/todo';

export interface HomeProps {
  todos: Todo[];
}

export default function Home({ todos }: HomeProps) {
  return <Todos items={todos} />;
}
