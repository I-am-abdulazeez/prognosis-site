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
import Image from "next/image";

const Landing = (): JSX.Element => {
  const theme = useTheme();
  const showImage = useBreakpointValue({
    base: "none",
    md: "block",
  });
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          h={{ base: "55vh", md: "80vh" }}
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
            <Heading fontSize={{ base: "30px", md: "49px" }}>
              Prognosis <chakra.span color="#8ef985">Technology</chakra.span>{" "}
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "20px" }}
              my={2}
              fontWeight="semibold"
            >
              Enterprises innovative software solutions
            </Text>
            <Text
              fontSize={{ base: "11px", md: "14px" }}
              fontWeight="light"
              lineHeight="23px"
            >
              Prognosis Technologies (PS) is a software development and
              implementation service provider using cutting edge technologies.
              Since 2013, we have been helping companies and organization create
              and recreate software solutions powered by latest technologies to
              improve their business goals.
            </Text>
            <Button
              mt={5}
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
            <Image
              width="400px"
              height="400.26px"
              src="/images/landing.svg"
              alt="logo"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
