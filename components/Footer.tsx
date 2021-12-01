import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { ChakraNextImage } from "../components/ChakraImage";
import Link from "next/link";
import { chakra } from "@chakra-ui/system";
import Social from "./Social";

const Footer = (): JSX.Element => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          gap={{ base: "2em", md: "10em" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "40% 60%" }}
        >
          <GridItem>
            <VStack color="white" spacing={5}>
              <Box m="0 auto" width="100%">
                <ChakraNextImage
                  width="200px"
                  height="100px"
                  src="/images/Prognosis.png"
                  alt="logo"
                  rounded="lg"
                />
              </Box>
              <Text textStyle="defaultText">
                Prognosis Technologies Limited (PTL) is a software development
                and implementation service provider using cutting edge
                technologies. Since 2013, we have been helping companies and
                organization create and recreate software solutions powered by
                latest technologies to improve their business goals.
              </Text>
            </VStack>
          </GridItem>
          <GridItem justifySelf="left">
            <Stack
              direction="row"
              spacing={{ base: 2, md: "7em" }}
              color="#718096"
            >
              <Box
                d="flex"
                flexDir="column"
                width={{ base: "180px", md: "250px" }}
                gridGap="0.7em"
              >
                <Heading fontSize={{ base: "16px", md: "xl" }}>
                  OUR SOLUTIONS
                </Heading>
                <Text textStyle="defaultText">
                  Human Resource Management Solution
                </Text>
                <Text textStyle="defaultText">
                  Insurance Broker Management Platform{" "}
                </Text>
                <Text textStyle="defaultText">
                  HMO Insurance Management Solutions{" "}
                </Text>
                <Text textStyle="defaultText">General Insurance</Text>
                <Text textStyle="defaultText">
                  Accounting Software Solution
                </Text>
              </Box>
              <Flex direction="column" gridGap="1em">
                <Heading fontSize={{ base: "16px", md: "xl" }}>
                  QUICKS LINKS
                </Heading>
                <Text as={Link} href="/" textStyle="defaultText">
                  <chakra.a
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </chakra.a>
                </Text>
                <Text
                  as={Link}
                  href="/about"
                  textDecoration="underline"
                  textStyle="defaultText"
                >
                  <chakra.a
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    About Us
                  </chakra.a>
                </Text>
                <Text as={Link} href="/services" textStyle="defaultText">
                  <chakra.a
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Our Services
                  </chakra.a>
                </Text>
                <Text
                  as={Link}
                  href="/solution"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  <chakra.a
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    Our Solutions
                  </chakra.a>
                </Text>
                <Text
                  as={Link}
                  href="/contact"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  <chakra.a
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Contact
                  </chakra.a>
                </Text>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
        <Social />
      </Container>
    </Box>
  );
};

export default Footer;
