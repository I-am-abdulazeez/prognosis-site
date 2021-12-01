import { Box, Container, SimpleGrid } from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import RoundCard from "../components/RoundCard";
import SiteMetaData from "../components/SiteMetaData";
import Team from "../components/Team";

const About = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaContent="About Prognosis Technologies Limited"
        metaTitle="About | Prognosis Technologies Limited"
        metaContent2="Who we are | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/innovation.jpg"
        firstText="WHO WE ARE"
        hasSecondText={false}
        titleText="Delivering Values & Innovation"
      />
      <Box py="3em">
        <AboutSection />
      </Box>
      <Box py="3em" bg="#EEF2F6">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} mt={10} gap={8}>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <RoundCard
                title="WHY CHOOSE US
            360 Degree Approach"
                text="We take an informed and holistic approach from ideation to delivery of our customers’ needs and detailed job specification."
                bgColor="primary.200"
                textColor="#1A202C"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <RoundCard
                title="Client – Centricity"
                text="Our approach to client’s need is top-notched, we are empathetic, focused, positive and render genuine support to ensure our customer attained a more compatible solution to their business needs."
                bgColor="#1A202C"
                textColor="#fff"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
              <RoundCard
                title="Domain Expertise"
                text="We are a holistic software company and we pride ourselves in that line. We do not deviate from our mission wish is to provide software solutions for customers.."
                bgColor="white"
                textColor=""
              />
            </ScrollAnimation>
          </SimpleGrid>
          <Box mt={10}>
            <Container maxW="870px" px={{ base: 0, md: "inherit" }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <ScrollAnimation
                  animateIn="animate__slideInRight"
                  animateOnce={true}
                >
                  <RoundCard
                    bgColor="white"
                    textColor=""
                    title="Time-To-Market"
                    text="To guarantee the efficient running of your business, we ensure that from conception to execution and delivery of your project needs; every aspect is treated with utmost urgency efficiency."
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__slideInRight"
                  animateOnce={true}
                >
                  <RoundCard
                    bgColor="#2D3748"
                    textColor="white"
                    title="A-Class Team"
                    text="Our team are bunch of highly consistent and purpose driven individuals with years in providing software development solutions to businesses, brands and individuals."
                  />
                </ScrollAnimation>
              </SimpleGrid>
            </Container>
          </Box>
        </Container>
      </Box>
      <Box py="3em">
        <Team />
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

export default About;
