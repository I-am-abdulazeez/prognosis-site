import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import LandingOverlays from "../components/Landings/LandingOverlays";
import Navbar from "../components/Navigations/Navbar/Navbar";
import SiteMetaData from "../components/SiteMetaData";
import SolutionStack from "../components/SolutionStack";

const HMO: React.FC = () => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="HMO Insurance Management Solution | Prognosis Technologies Limited"
        metaContent="HMO Insurance Management Solution | Prognosis Technologies Limited"
        metaContent2="Make your work safe, easy, and efficient | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/health.jpg"
        firstText="HMO INSURANCE MANAGEMENT SOLUTION"
        hasSecondText={false}
        titleText="HMO Software are designed to make your work safe, easy, and efficient."
      />
      <Box bgColor="#1A202C">
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
              <Heading fontSize={{ base: "25px", md: "3xl" }} color="white">
                Prognosis HMO Insurance Management Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText" color="white">
                Prognosis Technology user-friendly and easy to use system is
                developed to work on the Web, working on SQL Database. It can
                also be used on either a single or a multi-user system.
              </Text>
              <SolutionStack />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box py="4em" bg="#8ef985">
        <Contact />
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default HMO;
