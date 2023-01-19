import { Todo } from '../../features/todo/models/todo';
import read from '../lib/fs';

export default function readTodos() {
  return read<Todo[]>('public', 'json', 'todo.json');
}
