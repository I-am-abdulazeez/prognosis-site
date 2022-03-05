import { Box } from "@chakra-ui/react";

import LandingOverlays from "../components/Landings/LandingOverlays";
import Navbar from "../components/Navigations/Navbar/Navbar";
import ServicesSection from "../components/Sections/ServicesSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import SiteMetaData from "../components/SiteMetaData";

const Services: React.FC = () => {
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
