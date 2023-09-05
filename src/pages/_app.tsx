import { Quicksand } from 'next/font/google';
import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={quicksand.className}>
        <Layout children={<Component {...pageProps} />} />
      </main>
    </ChakraProvider>
  );
};
