import { Todo } from '../modules/todo/models/todo';
import fsRead from '../utils/fs';

export function readTodos() {
  return fsRead<Todo[]>('data', 'todos.json');
}

export function readFeaturedTodos() {
  return fsRead<Todo[]>('data', 'featured-todos.json');
}
