import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from '../core/store';
import "../../public/css/template.css";
import { ThemeProvider } from 'styled-components';
import { theme } from '../global/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <ChakraProvider>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  </ThemeProvider>
}

export default MyApp
