import fetch from '../../../lib/fetch';
import { Todo } from '../models/todo';

export default function fetchTodos() {
  return fetch<Todo[]>('/json/todo-more.json');
}
