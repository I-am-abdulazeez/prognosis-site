import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";
import { chakra } from "@chakra-ui/system";
import Card from "./Card";

const SectionOne = () => {
  return (
    <Container maxW="container.xl">
      <Text
        textTransform="uppercase"
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="bold"
        color="#0FBF44"
      >
        our technology
      </Text>
      <ScrollAnimation animateIn="animate__pulse">
        <Heading fontSize={{ base: "25px", md: "4xl" }} my={4}>
          Cutting-Edge <chakra.span color="#0FBF44">Solutions</chakra.span>{" "}
        </Heading>
      </ScrollAnimation>
      <Box w={{ base: "100%", sm: "80%" }} m="0 auto">
        <Text
          fontSize={{ base: "11px", md: "inherit" }}
          w={{ base: "90%", md: "" }}
          m={{ base: "0 auto", md: "" }}
        >
          Every business today faces the need of undergoing Digital
          Transformation. Our solutions are designed to help our clients
          leverage emerging technologies and enterprise-wide software solutions
          for long term growth and profit assurance.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} mt={10} gap={8}>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <Card
            icon="/images/dp.svg"
            h="130px"
            w="130px"
            title="Data Processing & Analysis"
            text="Our superb and customized analytics software keeps you informed and articulate as you build customer relationship."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <Card
            icon="/images/ai.svg"
            h="130px"
            w="130px"
            title="Artificial Intelligence"
            text="Our experts have the experience and required expertise in Machine Learning to give you real time and automated assistance."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <Card
            icon="/images/pa.svg"
            h="130px"
            w="130px"
            title="Predictive Analytics"
            text="Our team of Data engineers and analyst will help you develop a data strategy, which will help you stay ahead of trends and keep your organisation agile."
          />
        </ScrollAnimation>
      </SimpleGrid>

      <Box mt={10}>
        <Container maxW="870px" px={{ base: 0, md: "inherit" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <ScrollAnimation animateIn="animate__fadeInUp">
              <Card
                icon="/images/it.svg"
                h="140px"
                w="140px"
                title="Internet of Things"
                text="Introduce internet of things to your operations to improve work place safety, reduce operation cost and enhance customer experience."
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp">
              <Card
                icon="/images/cc.svg"
                h="140px"
                w="140px"
                title="Cloud Computing"
                text="Prognosis is fully capable of helping you optimize and redesign a future-proof cloud solution. Achieve more with cloud computing."
              />
            </ScrollAnimation>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default SectionOne;
