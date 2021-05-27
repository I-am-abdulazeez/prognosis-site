import { Button } from "@chakra-ui/button";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { chakra } from "@chakra-ui/system";
import { useTheme } from "@emotion/react";
import ScrollAnimation from "react-animate-on-scroll";
import { ChakraImage } from "../utils";

const Landing = (): JSX.Element => {
  const showImage = useBreakpointValue({
    base: "none",
    md: "block",
  });
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          h={{ base: "50vh", md: "80vh" }}
          gap="5em"
          alignItems="center"
          justifyContent="space-between"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem color="#fff" textAlign={{ base: "center", md: "inherit" }}>
            <Heading fontSize={{ base: "25px", md: "45px" }}>
              Prognosis <chakra.span color="#8ef985">Technology</chakra.span>{" "}
            </Heading>

            <Text
              mt={1}
              fontSize={{ base: "13px", md: "18px" }}
              fontWeight="semibold"
            >
              Enterprises innovative software solutions
            </Text>
            <Text
              fontSize={{ base: "sm", md: "15px" }}
              fontWeight="light"
              width={{ base: "90%", md: "100%" }}
              my={{ base: 1, md: 5 }}
              lineHeight={{ base: "1.6", md: "1.7" }}
            >
              Prognosis Technologies (PS) is a software development and
              implementation service provider using cutting edge technologies.
              Since 2013, we have been helping companies and organization create
              and recreate software solutions powered by latest technologies to
              improve their business goals.
            </Text>
            <Button
              size={buttonSize}
              color="#1A202C"
              _hover={{
                bgColor: "#8ef985",
              }}
              _active={{
                bgColor: "#8ef985",
              }}
              _focus={{
                boxShadow: "0 0 0 3px #24db14",
              }}
              bgColor="#8ef985"
            >
              Learn more
            </Button>
          </GridItem>
          <GridItem justifySelf="end" display={showImage}>
            <ScrollAnimation animateOnce={false} animateIn="animate__pulse">
              <ChakraImage
                width="400px"
                height="400.26px"
                src="/images/landing.svg"
                alt="logo"
              />
            </ScrollAnimation>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
