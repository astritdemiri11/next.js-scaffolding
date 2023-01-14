import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Item } from '../features/item/models/item';
import loadItems from '../features/item/services/items';

type ServerProps = {
  items: Item[];
};

export default function ServerPage({ items }: ServerProps) {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<ServerProps> = async () => {
  try {
    const items = await loadItems();

    if (items.length === 0) {
      return { notFound: true };
    }

    return { props: { items }, revalidate: 10 };
  } catch {
    return { props: { items: [] }, redirect: { destination: '/' } };
  }
};
