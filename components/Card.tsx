import { Box, HStack, Text } from "@chakra-ui/layout";
import { ChakraImage } from "../utils";

type CardProps = {
  icon: string;
  title: string;
  text: string;
  w: string;
  h: string;
  alt: string;
};

const Card = ({ icon, title, text, w, h, alt }: CardProps): JSX.Element => {
  return (
    <HStack spacing={7} p={5} boxShadow="md" borderRadius="md">
      <Box>
        <ChakraImage width={w} height={h} src={icon} alt={alt} />
      </Box>
      <Box textAlign="left">
        <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="bold" mb={1}>
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
