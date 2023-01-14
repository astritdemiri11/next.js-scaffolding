import read from '../../../lib/fs';
import { Item } from '../models/item';

export default function loadItems() {
  return read<Item[]>('features', 'item', 'data', 'items.json');
}
