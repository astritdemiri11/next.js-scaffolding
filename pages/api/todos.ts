// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { readTodos } from '../../lib/todo';
import { Todo } from '../../modules/todo';

type Error = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[] | Error>
) {
  if (req.method !== 'GET') {
    return res.status(404).json({ message: 'Invalid request' });
  }

  const todos = await readTodos();
  return res.json(todos);
}
