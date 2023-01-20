import fetch from '../../../utils/fetch';
import { Todo } from '../models/todo';

export default function fetchTodos() {
  return fetch<Todo[]>('/api/todos');
}
