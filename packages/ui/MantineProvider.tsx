import { MantineProvider as Provider, MantineProviderProps } from '@mantine/core';

export const MantineProvider = ({ children, ...props }: MantineProviderProps) => {
  return (
    <Provider {...props} withGlobalStyles withNormalizeCSS>
      {children}
    </Provider>
  );
}
