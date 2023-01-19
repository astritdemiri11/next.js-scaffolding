import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Todo } from '../features/todo';
import readTodos from '../server/services/todo';

type ServerProps = {
  todos: Todo[];
};

export default function ServerPage({ todos }: ServerProps) {
  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<ServerProps> = async () => {
  try {
    const todos = await readTodos();

    if (todos.length === 0) {
      return { notFound: true };
    }

    return { props: { todos }, revalidate: 10 };
  } catch {
    return { props: { todos: [] }, redirect: { destination: '/' } };
  }
};
