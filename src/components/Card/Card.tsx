import { Box, HStack, Text } from "@chakra-ui/layout";

import { ChakraNextImage } from "../ChakraImage/ChakraImage";

import { CardProps } from "@interfaces/index";

const Card: React.FC<CardProps> = ({ icon, title, text, w, h, alt }) => {
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
