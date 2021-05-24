import { Box, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

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
      <Box py={10} textAlign="center">
        <SectionOne />
      </Box>
      <Box py={10} bgColor="#1A202C">
        <SectionTwo />
      </Box>
    </Box>
  );
}
