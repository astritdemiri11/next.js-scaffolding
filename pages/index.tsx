import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Item } from '../features/item/models/item';
import loadItems from '../features/item/services/items';

type HomeProps = {
  items: Item[];
};

export default function HomePage({ items }: HomeProps) {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const IGNdummy = null;

    const items = await loadItems();

    if (items.length === 0) {
      return { notFound: true };
    }

    return { props: { items }, revalidate: 10 };
  } catch {
    return { props: { items: [] }, redirect: { destination: '/' } };
  }
};
