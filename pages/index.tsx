import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import ImpactSection from "../components/ImpactSection";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Testimonials from "../components/Testimonials";

export default function Home(): JSX.Element {
  return (
    <Box>
      <Head>
        <title>Home | Prognosis Technology</title>
        <meta name="description" content="Prognosis Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box bgColor="#1A202C">
        <Landing />
      </Box>
      <Box py={10} textAlign="center">
        <SectionOne />
      </Box>
      <Box py={10} bgColor="#1A202C">
        <SectionTwo />
      </Box>
      <Box
        py={{ base: "5em", md: "8em" }}
        bg="url('images/sec-img.png')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        color="white"
      >
        <Container maxW="container.xl">
          <ScrollAnimation animateIn="animate__slideInUp" duration={0.3}>
            <Heading
              w={{ base: "320px", md: "50%" }}
              mb={5}
              fontSize={{ base: "25px", md: "4xl" }}
            >
              Robust technology solutions across market verticals
            </Heading>
          </ScrollAnimation>
          <Text
            w={{ base: "100%", md: "40%" }}
            lineHeight="1.7"
            fontSize={{ base: "sm", md: "15px" }}
          >
            Take control of your business finances, we have designed our
            accounting solution to provide business owners with a full spectrum
            of features guaranteed to help them manage all aspects of their
            business finance.
          </Text>
        </Container>
      </Box>
      <ImpactSection />
      <Box bg="#EEF2F6" py={6}>
        <Testimonials />
      </Box>
      <Box></Box>
    </Box>
  );
}
