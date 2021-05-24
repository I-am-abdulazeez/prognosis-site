import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";

import NextNprogress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color="#0f7a06"
        startPosition={0.3}
        stopDelayMs={250}
        height={2}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
