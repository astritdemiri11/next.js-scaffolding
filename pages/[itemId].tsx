import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Item } from '../features/item/models/item';
import loadItems from '../features/item/services/items';

type ItemProps = {
  item: Item | null;
};

export default function ItemPage({ item }: ItemProps) {
  if (!item) {
    return <h1>Item not found!</h1>;
  }

  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  itemId: string;
}

export const getStaticProps: GetStaticProps<ItemProps, Params> = async ({
  params,
}) => {
  try {
    if (!params) {
      return { notFound: true };
    }

    const items = await loadItems();

    if (items.length === 0) {
      return { notFound: true };
    }

    const { itemId } = params;
    const item = items.find((itemData) => itemData.id === +itemId);

    if (!item) {
      return { notFound: true };
    }

    return { props: { item }, revalidate: 10 };
  } catch {
    return { props: { item: null }, redirect: { destination: '/' } };
  }
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  try {
    const items = await loadItems();

    if (items.length === 0) {
      return { paths: [], fallback: 'blocking' };
    }

    const paths = items
      .slice(0, 2)
      .map((item) => ({ params: { itemId: `${item.id}` } }));

    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
};
