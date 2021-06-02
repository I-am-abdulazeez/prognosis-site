import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MdFilterFrames } from "react-icons/md";
import { SiFSecure } from "react-icons/si";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";

const HMO = () => {
  return (
    <Box>
      <Head>
        <title>
          HMO Insurance Management Solution | Prognosis Technologies Limited
        </title>
        <meta
          name="description"
          content="HMO Insurance Management Solution | Prognosis Technologies Limited"
        />
        <meta
          property="og:title"
          content="Make your work safe, easy, and efficient | Pronosis Technologies Limited"
        />
        <meta
          property="og:description"
          content="Make your work safe, easy, and efficient | Pronosis Technologies Limited"
        />
        <meta property="og:image" content="/images/Prognosis.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/health.jpg"
        firstText="HMO INSURANCE MANAGEMENT SOLUTION"
        hasSecondText={false}
        titleText="HMO Software are designed to make your work safe, easy, and efficient."
      />
      <Box>
        <Flex justify="space-between" direction="row">
          <Image
            display={{ base: "none", md: "block" }}
            src="/images/health.jpg"
            objectFit="cover"
          />
          <Flex align="center" justify="center">
            <Box
              px={{ base: "2em", md: "5em" }}
              py={{ base: "2em", md: "0px" }}
            >
              <Heading fontSize={{ base: "25px", md: "4xl" }}>
                Prognosis HMO Insurance Management Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                Prognosis Technology user-friendly and easy to use system is
                developed to work on the Web, working on SQL Database. It can
                also be used on either a single or a multi-user system.
              </Text>
              <Stack
                align="center"
                spacing={{ base: "1.5em", md: "1em" }}
                direction={{ base: "column", md: "row" }}
                mt={"2em"}
              >
                <HStack>
                  <SiFSecure size="30px" color="#A0AEC0" />
                  <Text mt={"1em"} textStyle="defaultText">
                    Secured Database
                  </Text>
                </HStack>
                <HStack>
                  <MdFilterFrames size="30px" color="#A0AEC0" />
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

export default HMO;
