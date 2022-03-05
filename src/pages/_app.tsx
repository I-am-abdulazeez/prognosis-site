import type { AppProps } from "next/app";
import { ChakraProvider, chakra } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";

import SwiperCore, {
  Navigation,
  Pagination,
  Lazy,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import ScrollToTop from "../components/ScrollToTop";

import "animate.css/animate.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@styles/globals.css";

import theme from "@theme/index";

SwiperCore.use([Navigation, Pagination, Lazy, Autoplay, EffectCoverflow]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color="#0f7a06"
        startPosition={0.3}
        stopDelayMs={250}
        height={3}
      />
      <chakra.div color="#2d3748">
        <Component {...pageProps} />
        <ScrollToTop />
      </chakra.div>
    </ChakraProvider>
  );
};

export default MyApp;
