import { HStack, Stack, Text } from "@chakra-ui/layout";
import { MdFilterFrames } from "react-icons/md";
import { SiFsecure } from "react-icons/si";

const SolutionStack: React.FC = () => {
  return (
    <Stack
      align="center"
      spacing={{ base: "1.5em", md: "1em" }}
      direction={{ base: "column", md: "row" }}
      mt={"2em"}
    >
      <HStack color="#fff">
        <SiFsecure size="30px" color="#EEF2F6" />
        <Text mt={"1em"} textStyle="defaultText">
          Secured Database
        </Text>
      </HStack>
      <HStack>
        <MdFilterFrames size="30px" color="#EEF2F6" />
        <Text mt={"1em"} textStyle="defaultText" color="#fff">
          Modern Framework
        </Text>
      </HStack>
    </Stack>
  );
};

export default SolutionStack;
