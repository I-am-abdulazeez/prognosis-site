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
import { ChakraNextImage } from "../ChakraImage/ChakraImage";
import Social from "../Social";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
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
                  priority={true}
                  src="/images/Prognosis.png"
                  alt="logo"
                  borderRadius="10px"
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
                <FooterLinks
                  text="Accounting Software Solution"
                  link="/accounting-software-solution"
                />
                <FooterLinks
                  text="General Insurance Mangement"
                  link="/general-insurance"
                />
                <FooterLinks
                  text="HMO Insurance Management Solutions"
                  link="/hmo-insurance-management-solution"
                />
                <FooterLinks
                  text="Human Resource Management Solution"
                  link="/human-resource-management-solution"
                />
                <FooterLinks
                  text=" Insurance Broker Management Platform"
                  link="/insurance-broker-management-platform"
                />
              </Box>
              <Flex direction="column" gridGap="1em">
                <Heading fontSize={{ base: "16px", md: "xl" }}>
                  QUICKS LINKS
                </Heading>
                <FooterLinks text="Home" link="/" />
                <FooterLinks text="About" link="/about" />
                <FooterLinks text="Our Services" link="/services" />
                <FooterLinks text="Our Solutions" link="/solution" />
                <FooterLinks text="Contact" link="/contact" />
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
