// import styles from './ClientFetch.module.css';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { fetchTodos, Todo, Todos } from '../../modules/todo';

export interface ClientFetchProps {
  todos: Todo[];
}

export default function ClientFetch({ todos: serverTodos }: ClientFetchProps) {
  const [todos, setTodos] = useState(serverTodos);

  const { data, error } = useQuery<Todo[]>(['todos'], fetchTodos);

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
