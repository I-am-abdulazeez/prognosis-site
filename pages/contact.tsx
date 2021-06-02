import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import Head from "next/head";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <Box>
      <Head>
        <title>Contact Us | Prognosis Technologies Limited</title>
        <meta
          name="description"
          content="Contact Prognosis Technologies Limited"
        />
        <meta
          property="og:title"
          content="Contact Pronosis Technologies Limited"
        />
        <meta
          property="og:description"
          content="Connect with us | Pronosis Technologies Limited"
        />
        <meta property="og:image" content="/images/Prognosis.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/contact.jpg"
        firstText="CONNECT WITH US"
        hasSecondText={false}
        titleText="Contact Us"
      />
      <Box py="4em" bg="#87F97D">
        <Container maxW="container.xl">
          <SimpleGrid
            align="center"
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
                Plot 5, Akiogun Road, Opposite Lekki Phase 1, Lagos Island,
                Nigeria.
              </Text>
            </VStack>
            <VStack align="center" spacing="1em">
              <HiOutlinePhone size="50px" />
              <Heading fontSize={{ base: "20px", md: "2xl" }}>Phone</Heading>
              <Text>+234 809 070 0956, </Text>
            </VStack>
            <VStack align="center" spacing="1em">
              <HiOutlineMail size="50px" />
              <Heading fontSize={{ base: "20px", md: "2xl" }}>
                Contact Details
              </Heading>
              <Text>info@prognosistechnologie.com</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7095212313134!2d3.4551009146229776!3d6.43134879534694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf506fd3e81ed%3A0x14f9e2e3ac06fee8!2s5%20Akiogun%20Rd%2C%20Maroko%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1622500330435!5m2!1sen!2sng"
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
