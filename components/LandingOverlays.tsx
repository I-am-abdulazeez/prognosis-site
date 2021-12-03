import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";

type LandingOverProps = {
  bgImage: string;
  firstText: string;
  titleText: string;
  hasSecondText: boolean;
  secondText?: string;
};

const LandingOverlays = ({
  bgImage,
  firstText,
  titleText,
  hasSecondText,
  secondText,
}: LandingOverProps) => {
  return (
    <Box
      py={{ base: "5em", md: "8em" }}
      bgPos="center"
      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      color="white"
      top="2em"
    >
      <Flex
        align="center"
        direction="column"
        justify="center"
        textAlign="center"
        px={{ base: "1.5em", md: "" }}
        h={{ base: "30vh", md: "40vh" }}
      >
        <Text
          textStyle="defaultText"
          mb={1.5}
          color="primary.300"
          fontWeight="semibold"
        >
          {firstText}
        </Text>
        <ScrollAnimation animateIn="animate__fadeIn">
          <Heading
            fontSize={{ base: "25px", md: "3xl" }}
            width={{ base: "100%", md: "600px" }}
          >
            {titleText}
          </Heading>
        </ScrollAnimation>
        {hasSecondText && (
          <Text
            mt={4}
            w={{ base: "100%", md: "600px" }}
            textStyle="defaultText"
          >
            {secondText}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default LandingOverlays;
