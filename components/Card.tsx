import { Box, HStack, Text } from "@chakra-ui/layout";
import { CardProps } from "../interfaces";
import { ChakraNextImage } from "../components/ChakraImage";

const Card = ({ icon, title, text, w, h, alt }: CardProps): JSX.Element => {
  return (
    <HStack spacing={7} p={5} boxShadow="md" borderRadius="md">
      <Box>
        <ChakraNextImage width={w} height={h} src={icon} alt={alt} />
      </Box>
      <Box textAlign="left">
        <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="bold" mb={1}>
          {title}
        </Text>
        <Text color="#718096" fontSize="13px">
          {text}
        </Text>
      </Box>
    </HStack>
  );
};

export default Card;
