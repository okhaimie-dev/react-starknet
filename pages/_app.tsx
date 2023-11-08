import type { AppProps } from 'next/app'

import { StarknetProvider } from '@/components/starknet-provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StarknetProvider>
      <Component {...pageProps} />
    </StarknetProvider>
  )
}
