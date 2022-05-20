import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { MantineProvider, theme } from 'ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ refreshInterval: 2000 }}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </SWRConfig>
  )
}
