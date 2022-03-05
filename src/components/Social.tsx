import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

const Social: React.FC = () => {
  return (
    <div>
      <Box
        width={{ base: "100%", md: "500px" }}
        m="0 auto"
        textAlign="center"
        mt={{ base: "2em", md: "5em" }}
        color="white"
      >
        <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
          Brownstone Estate, 39 Off Kusenla Road, Ikate-Eleguishi, Lekki Phase
          1, Lagos Island, Nigeria.
        </Text>
      </Box>
      <Box textAlign="center" mt="1.2em" color="white">
        <Text lineHeight="1.7" fontSize={{ base: "sm", md: "15px" }}>
          +234 809 070 0956, +234 701 626 2503.
        </Text>
      </Box>
      <HStack spacing={3} mt="1em" justifyContent="center">
        <IconButton
          variant="ghost"
          as="a"
          href="#"
          size="xs"
          color="#718096"
          _hover={{
            color: "#87F97D",
          }}
          aria-label="facebook"
          icon={<RiFacebookCircleFill size="23px" />}
        />
        <IconButton
          variant="ghost"
          as="a"
          href="#"
          size="xs"
          color="#718096"
          _hover={{
            color: "#87F97D",
          }}
          aria-label="facebook"
          icon={<RiTwitterFill size="23px" />}
        />
        <IconButton
          variant="ghost"
          as="a"
          href="#"
          size="xs"
          color="#718096"
          _hover={{
            color: "#87F97D",
            transform: "scale(0.8px)",
          }}
          _active={{
            bgColor: "none",
          }}
          aria-label="facebook"
          icon={<RiLinkedinBoxFill size="23px" />}
        />
      </HStack>
    </div>
  );
};

export default Social;
