import { Image } from "@chakra-ui/image";
import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";

const Client = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Heading
        w={{ base: "100%", md: "80%" }}
        fontSize={{ base: "25px", md: "4xl" }}
      >
        Clients who trust us
      </Heading>

      <SimpleGrid
        columns={{ base: 3, sm: 4, md: 7 }}
        spacing={{ base: "1em", md: 10 }}
        mt={{ base: 7, md: 14 }}
      >
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
        <Image boxSize="100px" src="/images/client-1.svg" alt="client-1" />
      </SimpleGrid>
    </Container>
  );
};

export default Client;
