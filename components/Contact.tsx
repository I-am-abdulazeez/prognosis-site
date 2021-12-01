import {
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";
import ContactForm from "./ContactForm";

const Contact = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Grid
        gap={{ base: "3em", md: "7em" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "55% 35%" }}
      >
        <GridItem>
          <Stack direction="column" spacing={7}>
            <Heading
              w={{ base: "100%", md: "70%" }}
              fontSize={{ base: "25px", md: "3xl" }}
            >
              Let us deliver on your project needs
            </Heading>
            <Text w={{ base: "100%", md: "80%" }} textStyle="defaultText">
              Our team of professional developers and business analyst are
              always willing to hear about your project need and design custom
              solutions that are guaranteed to give your business the winning
              edge. Reach out to us via our project inquiry form. We will
              respond back to you in no time.
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <ContactForm />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Contact;
