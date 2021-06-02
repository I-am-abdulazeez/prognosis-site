import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MdFilterFrames } from "react-icons/md";
import { SiFSecure } from "react-icons/si";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";

const InsuranceBroker = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>
          Insurance Broker Management Platform | Prognosis Technologies Limited
        </title>
        <meta
          name="description"
          content="Insurance Broker Management Platform | Prognosis Technologies Limited"
        />
        <meta
          property="og:title"
          content="Maintain individual client & sales record | Pronosis Technologies Limited"
        />
        <meta
          property="og:description"
          content="Maintain individual client & sales record | Pronosis Technologies Limited"
        />
        <meta property="og:image" content="/images/Prognosis.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/insurance.jpg"
        firstText="INSURANCE BROKER MANAGEMENT PLATFORM"
        hasSecondText={false}
        titleText="Maintain individual client & sales record."
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
                Prognosis Insurance Broker Management Platform.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                Take Your Insurance Business to the Next Level with our easy to
                manage, fully integrated solutions; all in one place. Capturing
                and maintaining client policy allows agents to effectively
                service clients and stay of top of sales.
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

export default InsuranceBroker;
