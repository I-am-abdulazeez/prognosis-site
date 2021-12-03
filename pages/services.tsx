import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import { Box } from "@chakra-ui/react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SiteMetaData from "../components/SiteMetaData";

const Services = (): JSX.Element => {
  return (
    <Box>
      <SiteMetaData
        metaTitle="Services | Prognosis Technologies Limited"
        metaContent="Services |Prognosis Technologies Limited"
        metaContent2="Services | Pronosis Technologies Limited"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/business.jpg"
        firstText="WHAT WE DO"
        hasSecondText={true}
        secondText="We've developed more than 120 custom software solutions for businesses across Africa. To learn more about how we can help your business, check out our areas of expertise, and don't hesitate to ask us a question!"
        titleText="Transforming businesses & Delivering innovative solutions"
      />
      <ServicesSection />
      <Box py="4em" bg="#8ef985">
        <Contact />
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default Services;
