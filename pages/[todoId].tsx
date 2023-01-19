import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Todo } from '../features/todo';
import readTodos from '../server/services/todo';

type TodoProps = {
  todo: Todo | null;
};

export default function TodoPage({ todo }: TodoProps) {
  if (!todo) {
    return <h1>Todo not found!</h1>;
  }

  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  todoId: string;
}

export const getStaticProps: GetStaticProps<TodoProps, Params> = async ({
  params,
}) => {
  try {
    if (!params) {
      return { notFound: true };
    }

    const todos = await readTodos();

    if (todos.length === 0) {
      return { notFound: true };
    }

    const { todoId } = params;
    const todo = todos.find((todoData) => todoData.id === +todoId);

    if (!todo) {
      return { notFound: true };
    }

    return { props: { todo }, revalidate: 10 };
  } catch {
    return { props: { todo: null }, redirect: { destination: '/' } };
  }
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  try {
    const todos = await readTodos();

    if (todos.length === 0) {
      return { paths: [], fallback: 'blocking' };
    }

    const paths = todos
      .slice(0, 2)
      .map((todo) => ({ params: { todoId: `${todo.id}` } }));

    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
};
