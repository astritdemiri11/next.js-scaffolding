import { GetStaticProps } from 'next';

import { readTodos } from '../lib/todo';
import { Home, HomeProps } from '../views';

export default function HomePage({ todos }: HomeProps) {
  return <Home todos={todos} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
