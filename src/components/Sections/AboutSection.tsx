import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";

import { cardsArray } from "@data/index";
import { cardItems } from "@interfaces/index";

const AboutSection: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        align="center"
        textAlign="center"
        direction="column"
        justify="center"
      >
        <Heading
          w={{ base: "100%", md: "700px" }}
          fontSize={{ base: "25px", md: "3xl" }}
        >
          Transforming Businesses & Processes{" "}
          <chakra.span color="#0FBF44">
            Through Innovative Technology
          </chakra.span>
        </Heading>
        <Text
          w={{ base: "100%", md: "800px" }}
          my="1.2em"
          textStyle="defaultText"
        >
          Prognosis Technologies Limited (PTL) is a software development and
          implementation service provider using cutting edge technologies. Since
          2013, we have been helping companies and organization create and
          recreate software solutions powered by latest technologies to improve
          their business goals.
        </Text>
      </Flex>
      <SimpleGrid mt={10} spacing={3} columns={{ base: 1, md: 3 }}>
        {cardsArray.map(({ cardHeader, cardText }: cardItems, i) => (
          <Box p={3} key={i}>
            <Box
              w={{ base: "200px", md: "300px" }}
              m="0 auto"
              rounded="md"
              bgColor="primary.200"
              roundedTopLeft="3xl"
              p={{ base: 2, md: 3 }}
            >
              <Heading
                textAlign="center"
                fontSize={{ base: "18px", md: "2xl" }}
              >
                {cardHeader}
              </Heading>
            </Box>
            <Box mt={6} textAlign="center">
              <Text textStyle="defaultText" lineHeight="1.7">
                {cardText}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default AboutSection;
