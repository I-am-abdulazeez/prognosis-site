import { Box, Heading, Text } from "@chakra-ui/layout";

import { RoundCardProps } from "../../interfaces";

const RoundCard: React.FC<RoundCardProps> = ({
  bgColor,
  title,
  text,
  textColor,
}) => {
  return (
    <Box
      bg={bgColor}
      p={10}
      boxShadow="md"
      borderRadius="md"
      borderTopLeftRadius="3xl"
      color={textColor}
    >
      <Heading fontSize={{ base: "18px", md: "2xl" }} fontWeight="bold" mb={1}>
        {title}
      </Heading>
      <Text mt={3} fontSize="13px">
        {text}
      </Text>
    </Box>
  );
};

export default RoundCard;
