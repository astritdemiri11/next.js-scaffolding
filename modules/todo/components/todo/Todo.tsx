import Link from 'next/link';

import { Todo } from '../../models/todo';
import styles from './Todo.module.css';

type TodoItemProps = {
  item: Todo;
};

export default function TodoItem({ item }: TodoItemProps) {
  return (
    <div className={styles.container}>
      <Link href={`/${item.id}`}>
        {item.title} - {item.description}
      </Link>
    </div>
  );
}
