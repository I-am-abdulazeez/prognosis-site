import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import theme from "../styles/theme";
import "animate.css/animate.min.css";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/lazy/lazy.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../styles/globals.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Lazy,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import ScrollToTop from "../components/ScrollToTop";

SwiperCore.use([Navigation, Pagination, Lazy, Autoplay, EffectCoverflow]);

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
      <ScrollToTop />
    </ChakraProvider>
  );
};

export default MyApp;
