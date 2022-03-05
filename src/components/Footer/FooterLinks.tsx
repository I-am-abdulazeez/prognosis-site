import Link from "next/link";
import { Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";

import { FooterLinksProps } from "@interfaces/index";

const FooterLinks: React.FC<FooterLinksProps> = ({ text, link }) => {
  return (
    <Text
      as={Link}
      href={link}
      lineHeight="1.7"
      fontSize={{ base: "sm", md: "15px" }}
    >
      <chakra.a
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: "15px",
        }}
        transition="all 300ms ease-in-out"
      >
        {text}
      </chakra.a>
    </Text>
  );
};

export default FooterLinks;
