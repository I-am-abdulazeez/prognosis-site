import { Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Link from "next/link";
import SolutionMenu from "../SolutionMenu";

import { navLinks } from "@data/index";

const SmallScreenLinks: React.FC = () => {
  const router = useRouter();

  return (
    <Stack spacing={3}>
      {navLinks.map(({ href, linkName }) => (
        <Link href={href}>
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
          justifyContent="flex-start"
          color={router.pathname === "/contact" ? "#0f7a06" : ""}
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
    </Stack>
  );
};

export default SmallScreenLinks;
