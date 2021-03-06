import { Button } from "@chakra-ui/button";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";

import { chakra } from "@chakra-ui/system";

import { Image } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { ChakraNextImage } from "../ChakraImage/ChakraImage";

const Landing: React.FC = () => {
  const showImage = useBreakpointValue({
    base: "none",
    md: "block",
  });

  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          h={{ base: "60vh", md: "80vh" }}
          gap="5em"
          alignItems="center"
          justifyContent="space-between"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem
            width={{ base: "90%", md: "100%" }}
            m="0 auto"
            color="#fff"
            textAlign={{ base: "left", md: "inherit" }}
          >
            <Heading fontSize={{ base: "25px", md: "35px" }}>
              Prognosis{" "}
              <chakra.span color="#8ef985">Technologies Limited</chakra.span>{" "}
            </Heading>

            <Text
              mb={{ base: 4, md: 5, lg: 6 }}
              fontSize={{ base: "13px", md: "18px" }}
              fontWeight="semibold"
            >
              Enterprises innovative software solutions
            </Text>
            <Text
              fontSize={{ base: "sm", md: "15px" }}
              fontWeight="light"
              lineHeight={{ base: "1.6", md: "1.7" }}
            >
              Prognosis Technologies Limited (PTL) is a software development and
              implementation service provider using cutting edge technologies.
              Since 2013, we have been helping companies and organization create
              and recreate software solutions powered by latest technologies to
              improve their business goals.
            </Text>
            <Link href="/services" passHref>
              <Button
                size="sm"
                as="a"
                href="/services"
                mt={{ base: 4, md: 5 }}
                color="#1A202C"
                _hover={{
                  bgColor: "#8ef985",
                }}
                _active={{
                  bgColor: "#8ef985",
                }}
                bgColor="#8ef985"
              >
                Learn more
              </Button>
            </Link>
          </GridItem>
          <GridItem justifySelf="end" display={showImage}>
            <ScrollAnimation animateIn="animate__pulse" initiallyVisible={true}>
              <ChakraNextImage
                width="350px"
                height="350.26px"
                src="/images/landing.svg"
                alt="landing-page-svg"
              />
            </ScrollAnimation>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
