import type { AppProps } from 'next/app';
import { MantineProvider, theme } from 'ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
