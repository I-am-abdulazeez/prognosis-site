import { Button, IconButton } from "@chakra-ui/button";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { ChakraImage } from "../utils";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Grid
          gap="5em"
          templateColumns={{ base: "repeat(1, 1fr)", md: "50% 45%" }}
        >
          <GridItem>
            <VStack color="white" spacing={5}>
              <Box m="0 auto" width="100%">
                <ChakraImage
                  width="200px"
                  height="100px"
                  src="/images/Prognosis.png"
                  alt="logo"
                  rounded="lg"
                />
              </Box>
              <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                Prognosis Technologies (PS) is a software development and
                implementation service provider using cutting edge technologies.
                Since 2013, we have been helping companies and organization
                create and recreate software solutions powered by latest
                technologies to improve their business goals.
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
                <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                  Human Resource Management Solution
                </Text>
                <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                  Insurance Broker Management Platform{" "}
                </Text>
                <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                  HMO Insurance Management Solutions{" "}
                </Text>
                <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                  General Insurance
                </Text>
                <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
                  Accounting Software Solution
                </Text>
              </Box>
              <Flex direction="column" gridGap="1em">
                <Heading fontSize={{ base: "16px", md: "xl" }}>
                  QUICKS LINKS
                </Heading>
                <Text
                  as={Link}
                  href="/"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  Home
                </Text>
                <Text
                  as={Link}
                  href="/about"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  About Us
                </Text>
                <Text
                  as={Link}
                  href="/services"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  Our Services
                </Text>
                <Text
                  as={Link}
                  href="/solution"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  Our Solutions
                </Text>
                <Text
                  as={Link}
                  href="/contact"
                  lineHeight="1.7"
                  fontSize={{ base: "sm", md: "15px" }}
                >
                  Contact
                </Text>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
        <Box
          width={{ base: "100%", md: "500px" }}
          m="0 auto"
          textAlign="center"
          mt="5em"
          color="white"
        >
          <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
            Prognosis technologies Plot 5, Akiogun Road. Opposite Lekki Phase 1,
            Lagos Island Nigeria.
          </Text>
        </Box>
        <Box textAlign="center" mt="1.2em" color="white">
          <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
            +234 809 070 0956, +234 809 070 0956
          </Text>
        </Box>
        <HStack spacing={3} mt="1em" justifyContent="center">
          <IconButton
            variant="ghost"
            as="a"
            href="#"
            size="xs"
            color="#718096"
            _hover={{
              bgColor: "none",
            }}
            _active={{
              bgColor: "none",
            }}
            aria-label="facebook"
            icon={<RiFacebookCircleFill size="23px" />}
          />
          <IconButton
            variant="ghost"
            as="a"
            href="#"
            size="xs"
            color="#718096"
            _hover={{
              bgColor: "none",
            }}
            _active={{
              bgColor: "none",
            }}
            aria-label="facebook"
            icon={<RiLinkedinBoxFill size="23px" />}
          />
          <IconButton
            variant="ghost"
            as="a"
            href="#"
            size="xs"
            color="#718096"
            _hover={{
              bgColor: "none",
            }}
            _active={{
              bgColor: "none",
            }}
            aria-label="facebook"
            icon={<RiTwitterFill size="23px" />}
          />
          <IconButton
            variant="ghost"
            as="a"
            href="#"
            size="xs"
            color="#718096"
            _hover={{
              bgColor: "none",
            }}
            _active={{
              bgColor: "none",
            }}
            aria-label="facebook"
            icon={<RiInstagramLine size="23px" />}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
