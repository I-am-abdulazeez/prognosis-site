import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import Footer from "../components/Footer/Footer";
import LandingOverlays from "../components/Landings/LandingOverlays";
import Navbar from "../components/Navigations/Navbar/Navbar";
import SiteMetaData from "../components/SiteMetaData";

const Contact: React.FC = () => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Contact Us | Prognosis Technologies Limited"
        metaContent="Contact  | Prognosis Technologies Limited"
        metaContent2="Connect with us | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/contact.jpg"
        firstText="CONNECT WITH US"
        hasSecondText={false}
        titleText="Contact Us"
      />
      <Box py="4em" bg="#8ef985">
        <Container maxW="container.xl">
          <SimpleGrid
            alignItems="center"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            spacing="4em"
          >
            <VStack align="center" spacing="1em">
              <HiOutlineLocationMarker size="50px" />
              <Heading fontSize={{ base: "20px", md: "2xl" }}>
                Our Location
              </Heading>
              <Text
                w={{ base: "100%", md: "300px" }}
                textAlign="center"
                textStyle="defautlText"
              >
                Brownstone Estate, 39 Off Kusenla Road, Ikate-Eleguishi, Lekki
                Phase 1, Lagos Island, Nigeria.
              </Text>
            </VStack>
            <VStack align="center" spacing="1em">
              <HiOutlinePhone size="50px" />
              <Heading fontSize={{ base: "20px", md: "2xl" }}>Phone</Heading>
              <Text>
                +234 809 070 0956, <br /> +234 701 626 2503.{" "}
              </Text>
            </VStack>
            <VStack align="center" spacing="1em">
              <HiOutlineMail size="50px" />
              <Heading fontSize={{ base: "20px", md: "2xl" }}>
                Contact Details
              </Heading>
              <Text>info@prognosistechnologies.com</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5922529885793!2d3.488712914149792!3d6.446365625845194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5069d6acbb3%3A0x65b73367767b3d4e!2sBrownStone%20Estate%20Lekki!5e0!3m2!1sen!2sng!4v1637922323004!5m2!1sen!2sng"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default Contact;
