import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { readFeaturedTodos, readTodos } from '../lib/todo';
import { Todo, TodoProps } from '../views';

export default function TodoPage({ todo }: TodoProps) {
  return <Todo todo={todo} />;
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
    const todos = await readFeaturedTodos();

    if (todos.length === 0) {
      return { paths: [], fallback: 'blocking' };
    }

    const paths = todos.map((todo) => ({ params: { todoId: `${todo.id}` } }));

    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
};
