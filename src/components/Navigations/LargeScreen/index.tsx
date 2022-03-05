import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Link from "next/link";
import SolutionMenu from "../SolutionMenu";

import { navLinks } from "@data/index";

const LargeScreenLinks: React.FC = () => {
  const router = useRouter();

  return (
    <Flex
      align="center"
      display={{ base: "none", md: "flex" }}
      gridGap="0.9em"
      justify="space-between"
    >
      {navLinks.map(({ href, linkName }, idx) => (
        <Link href={href} key={idx}>
          <Button
            size="sm"
            justifyContent="flex-start"
            color={router.pathname === href ? "#0f7a06" : ""}
            _hover={{
              bgColor: "#e3ffe2",
              transition: "all 0.5s ease-in-out",
            }}
            _active={{
              bgColor: "#8ef985",
            }}
            variant="ghost"
          >
            {linkName}
          </Button>
        </Link>
      ))}

      <SolutionMenu />

      <Link href="/contact">
        <Button
          size="sm"
          color={router.pathname === "/contact" ? "#0f7a06" : ""}
          bgColor={router.pathname === "/contact" ? "#e3ffe2" : ""}
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          variant="ghost"
        >
          Contact
        </Button>
      </Link>
    </Flex>
  );
};

export default LargeScreenLinks;
