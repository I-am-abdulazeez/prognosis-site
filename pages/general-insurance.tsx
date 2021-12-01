import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import SiteMetaData from "../components/SiteMetaData";
import SolutionStack from "../components/SolutionStack";

const GeneralInsurance = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="General Insurance | Prognosis Technologies Limited"
        metaContent="General Insurance | Prognosis Technologies Limited"
        metaContent2="Opt-in for a computerized system that manages everything for you | Pronosis Technologies Limited"
      />
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
              <Heading fontSize={{ base: "25px", md: "3xl" }}>
                Prognosis General Insurance Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                An easy to use accounting management solution for small, medium
                and large organizations. Sync your expenses, balance your books,
                and take full control of your finances.
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

export default GeneralInsurance;
