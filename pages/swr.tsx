import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { fetchTodos, Todo, Todos } from '../features/todo';
import readTodos from '../server/services/todo';

type SWRProps = {
  todos: Todo[];
};

export default function SWRPage({ todos: serverTodos }: SWRProps) {
  const [todos, setTodos] = useState(serverTodos);

  const { data, error } = useSWR<Todo[]>('todos', fetchTodos);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !todos) {
    return <p>Loading...</p>;
  }

  return <Todos items={todos} />;
}

export const getStaticProps: GetStaticProps<SWRProps> = async () => {
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
