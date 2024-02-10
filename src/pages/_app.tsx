import { Quicksand } from 'next/font/google';
import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { GoogleTagManager } from '@next/third-parties/google'

const quicksand = Quicksand({ subsets: ['latin'] })

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID! }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Strive Network App',
  projectId: '62f4b0df50c4e1733ead674371cabf77',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains} theme={darkTheme({
        accentColor: 'rgba(0, 120, 126, 1)',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
      >
        <ChakraProvider>
          <main className={quicksand.className}>
            <Layout>
              <Component {...pageProps} />
              <GoogleTagManager gtmId="GTM-WJM75TP7" />
            </Layout>
          </main>
        </ChakraProvider>
      </RainbowKitProvider>  
    </WagmiConfig>  
  );
};
