import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { Item } from '../features/item/models/item';
import loadItems from '../features/item/services/items';

type SWRProps = {
  items: Item[];
};

export default function SWRPage({ items: paramItems }: SWRProps) {
  const [items, setItems] = useState(paramItems);

  const { data, error } = useSWR<Item[]>('/json/items.json', (url) =>
    fetch(url).then((response) => response.json())
  );

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !items) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title} - ${item.description}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<SWRProps> = async () => {
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
