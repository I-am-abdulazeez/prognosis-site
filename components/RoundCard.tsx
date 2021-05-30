import { Box, Heading, Text } from "@chakra-ui/layout";

type RoundCardProps = {
  bgColor: string;
  title: string;
  text: string;
  textColor: string;
};

const RoundCard = ({
  bgColor,
  title,
  text,
  textColor,
}: RoundCardProps): JSX.Element => {
  return (
    <Box
      bg={bgColor}
      spacing={7}
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
