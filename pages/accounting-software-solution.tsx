import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import SiteMetaData from "../components/SiteMetaData";
import SolutionStack from "../components/SolutionStack";

const Accounting = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Accounting Software Solution | Prognosis Technologies Limited"
        metaContent="Accounting Software Solution | Prognosis Technologies Limited"
        metaContent2="Keep track of every money trail | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/accounting.jpg"
        firstText="ACCOUNTING SOFTWARE SOLUTION"
        hasSecondText={false}
        titleText="Simplify your Financials, Keep track of every money trail"
      />
      <Box bgColor="#1A202C">
        <Flex justify="space-between" direction="row" color="white">
          <Image
            display={{ base: "none", md: "block" }}
            src="/images/accounting.jpg"
            objectFit="cover"
          />
          <Flex align="center" justify="center">
            <Box
              px={{ base: "2em", md: "5em" }}
              py={{ base: "2em", md: "0px" }}
            >
              <Heading fontSize={{ base: "25px", md: "3xl" }}>
                Prognosis Accounting Software Solution.
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

export default Accounting;
