import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import SiteMetaData from "../components/SiteMetaData";
import SolutionStack from "../components/SolutionStack";

const HumanResource = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Human Resource Management Solution | Prognosis Technologies Limited"
        metaContent="Human Resource Management Solution | Prognosis Technologies Limited"
        metaContent2="Simplify your HR-related processes with Solutions built by our experts | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/insurance.jpg"
        firstText="HUMAN RESOURCE MANAGEMENT SOLUTION"
        hasSecondText={false}
        titleText="Simplify your HR-related processes with Solutions built by our experts."
      />
      <Box bgColor="#1A202C">
        <Flex justify="space-between" direction="row" color="white">
          <Image
            display={{ base: "none", md: "block" }}
            src="/images/business.jpg"
            width="650px"
            objectFit="cover"
          />
          <Flex align="center" justify="center">
            <Box
              px={{ base: "2em", md: "5em" }}
              py={{ base: "2em", md: "0px" }}
            >
              <Heading fontSize={{ base: "25px", md: "3xl" }}>
                Prognosis HR Management Solution.
              </Heading>
              <Text mt={"1em"} textStyle="defaultText">
                Our team of HR Solution experts simplifies.processes ranging
                from recruitment, onboarding, payroll, time and attendance,
                talent management, and many others with our HR Software
                Solution.
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

export default HumanResource;
