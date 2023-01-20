/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import { Footer, Header } from '../layouts';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Header text="Header works" />
      <Component {...pageProps} />
      <Footer text="Footer works" />
    </QueryClientProvider>
  );
}
