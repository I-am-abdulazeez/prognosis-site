import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import { clientImage } from "@data/index";

import { ChakraNextImage } from "./ChakraImage/ChakraImage";

const Client: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Heading
        w={{ base: "100%", md: "80%" }}
        fontSize={{ base: "25px", md: "3xl" }}
      >
        Clients who trust us...
      </Heading>

      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 7 }}
        spacing={{ base: "1em", md: 6 }}
        alignItems="center"
        mt={{ base: 7, md: 14 }}
      >
        {clientImage.map(({ alt, src, width, height }, idx) => (
          <ChakraNextImage
            key={idx}
            width={width}
            height={height}
            src={src}
            alt={alt}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Client;
