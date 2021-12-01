import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import SiteMetaData from "../components/SiteMetaData";
import SolutionStack from "../components/SolutionStack";

const InsuranceBroker = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Insurance Broker Management Platform | Prognosis Technologies Limited"
        metaContent="Insurance Broker Management Platform | Prognosis Technologies Limited"
        metaContent2="Maintain individual client & sales record | Pronosis Technologies Limited"
      />
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
              <Heading fontSize={{ base: "25px", md: "3xl" }}>
                Prognosis Insurance Broker Management Platform.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                Take Your Insurance Business to the Next Level with our easy to
                manage, fully integrated solutions; all in one place. Capturing
                and maintaining client policy allows agents to effectively
                service clients and stay of top of sales.
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

export default InsuranceBroker;
