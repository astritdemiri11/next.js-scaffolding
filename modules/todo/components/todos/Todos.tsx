import { Todo as TodoModel } from '../../models/todo';
import Todo from '../todo/Todo';
import styles from './Todos.module.css';

type TodosProps = {
  items: TodoModel[];
};

export default function Todos({ items }: TodosProps) {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li key={item.id}>
          <Todo item={item} />
        </li>
      ))}
    </ul>
  );
}
