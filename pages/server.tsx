import { GetStaticProps } from 'next';

import { readTodos } from '../lib/todo';
import { Server, ServerProps } from '../views';

export default function ServerPage({ todos }: ServerProps) {
  return <Server todos={todos} />;
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
