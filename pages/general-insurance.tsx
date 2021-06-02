import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MdFilterFrames } from "react-icons/md";
import { SiFSecure } from "react-icons/si";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";

const GeneralInsurance = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>General Insurance | Prognosis Technologies Limited</title>
        <meta
          name="description"
          content="General Insurance | Prognosis Technologies Limited"
        />
        <meta
          property="og:title"
          content="Opt-in for a computerized system that manages everything for you | Pronosis Technologies Limited"
        />
        <meta
          property="og:description"
          content="Opt-in for a computerized system that manages everything for you | Pronosis Technologies Limited"
        />
        <meta property="og:image" content="/images/Prognosis.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/insurance.jpg"
        firstText="GENERAL INSURANCE SOLUTION"
        hasSecondText={false}
        titleText="Eliminate Data Redundancy, opt-in for a computerized system that manages everything for you."
      />
      <Box bgColor="#1A202C">
        <Flex justify="space-between" direction="row" color="white">
          <Image
            display={{ base: "none", md: "block" }}
            src="/images/insurance.jpg"
            objectFit="cover"
          />
          <Flex align="center" justify="center">
            <Box
              px={{ base: "2em", md: "5em" }}
              py={{ base: "2em", md: "0px" }}
            >
              <Heading fontSize={{ base: "25px", md: "4xl" }}>
                Prognosis General Insurance Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                An easy to use accounting management solution for small, medium
                and large organizations. Sync your expenses, balance your books,
                and take full control of your finances.
              </Text>
              <Stack
                align="center"
                spacing={{ base: "1.5em", md: "1em" }}
                direction={{ base: "column", md: "row" }}
                mt={"2em"}
              >
                <HStack>
                  <SiFSecure size="30px" color="#EEF2F6" />
                  <Text mt={"1em"} textStyle="defaultText">
                    Secured Database
                  </Text>
                </HStack>
                <HStack>
                  <MdFilterFrames size="30px" color="#EEF2F6" />
                  <Text mt={"1em"} textStyle="defaultText">
                    Modern Framework
                  </Text>
                </HStack>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box py="4em" bg="#87F97D">
        <Contact />
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default GeneralInsurance;
