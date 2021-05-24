import { Box, HStack, Text } from "@chakra-ui/layout";
import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  text: string;
  w: string;
  h: string;
};

const Card = ({ icon, title, text, w, h }: CardProps): JSX.Element => {
  return (
    <HStack spacing={7} p={5} boxShadow="md" borderRadius="md">
      <Box>
        <Image width={w} height={h} src={icon} />
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
