import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import Head from "next/head";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

export default function Home() {
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
      <Box py={3} textAlign="center">
        <Container maxW="container.xl">
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="#0FBF44"
            mb={3}
          >
            our technology
          </Text>
          <Heading>
            Cutting-Edge <chakra.span color="#0FBF44">Solutions</chakra.span>{" "}
          </Heading>
          <Box w="80%" m="0 auto" mt={2}>
            <Text>
              Every business today faces the need of undergoing Digital
              Transformation. Our solutions are designed to help our clients
              leverage emerging technologies and enterprise-wide software
              solutions for long term growth and profit assurance.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
