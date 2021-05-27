import { chakra } from "@chakra-ui/system";
import Image from "next/image";

export const ChakraImage = chakra(Image, {
  shouldForwardProp: (props: any) =>
    ["width", "height", "src", "alt"].includes(props),
});
