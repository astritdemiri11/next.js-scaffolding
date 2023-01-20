// import styles from './ClientFetch.module.css';
import { GetStaticProps } from 'next';

import { readFeaturedTodos } from '../lib/todo';
import { ClientFetch, ClientFetchProps } from '../views';

export default function ClientFetchPage({ todos }: ClientFetchProps) {
  return <ClientFetch todos={todos} />;
}

export const getStaticProps: GetStaticProps<ClientFetchProps> = async () => {
  try {
    const todos = await readFeaturedTodos();

    if (todos.length === 0) {
      return { notFound: true };
    }

    return { props: { todos }, revalidate: 10 };
  } catch {
    return { props: { todos: [] }, redirect: { destination: '/' } };
  }
};
