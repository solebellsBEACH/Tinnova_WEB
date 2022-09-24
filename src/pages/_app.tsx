import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from '../core/store';
import "../../public/css/template.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
}

export default MyApp
