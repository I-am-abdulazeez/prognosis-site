import { Button } from "@chakra-ui/button";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";

import { chakra } from "@chakra-ui/system";

const ImpactSection: React.FC = () => {
  return (
    <Box py={{ base: "4em", md: "5em" }}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "60% 40%" }}
          gap={{ base: "2em", md: "0.3em" }}
        >
          <GridItem>
            <ScrollAnimation animateIn="animate__fadeInLeft" duration={0.8}>
              <Heading
                w={{ base: "100%", md: "80%" }}
                fontSize={{ base: "25px", md: "3xl" }}
              >
                Our <chakra.span color="#0FBF44">Solutions</chakra.span>{" "}
                Impacting 100,000+ Lives
              </Heading>
            </ScrollAnimation>
            <Text
              my={5}
              textStyle="defaultText"
              w={{ base: "100%", md: "63%" }}
            >
              Prognosis builds its technology with the ultimate purpose of
              helping business serve their clients optimally. Through our custom
              CRM & Insurance Management solutions, we are helping clients
              optimize their service offerings to end users.
            </Text>
            <Link href="/solutions" passHref>
              <Button
                as="a"
                size="sm"
                color="#1A202C"
                _hover={{
                  bgColor: "#8ef985",
                }}
                _active={{
                  bgColor: "#8ef985",
                }}
                _focus={{
                  boxShadow: "0 0 0 2px #a2f69b",
                }}
                bgColor="#8ef985"
              >
                Our solution
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <AspectRatio borderRadius="md" h="18em" maxW="500px" ratio={4 / 3}>
              <iframe
                title="Prognosis Site Intro"
                src="https://www.youtube.com/embed/Qq6LT7lVGM4"
                allowFullScreen
              />
            </AspectRatio>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactSection;
