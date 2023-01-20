import fs from 'fs/promises';
import path from 'path';

export default async <T>(...paths: string[]): Promise<T> => {
  const filePath = path.join(process.cwd(), ...paths);
  const buffer = await fs.readFile(filePath);

  return JSON.parse(buffer.toString()) as T;
};
