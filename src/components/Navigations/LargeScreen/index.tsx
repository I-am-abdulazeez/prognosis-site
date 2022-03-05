import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import Link from "next/link";

const LargeScreenLinks: React.FC = () => {
  const router = useRouter();
  return (
    <Flex
      align="center"
      display={{ base: "none", md: "flex" }}
      gridGap="0.9em"
      justify="space-between"
    >
      <Link href="/">
        <Button
          size="sm"
          rounded="full"
          color={router.pathname === "/" ? "#0f7a06" : ""}
          bgColor={router.pathname === "/" ? "#e3ffe2" : ""}
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          _focus={{
            boxShadow: "0 0 0 2px #24db14",
          }}
          variant="ghost"
        >
          Home
        </Button>
      </Link>

      <Link href="/about">
        <Button
          size="sm"
          rounded="full"
          color={router.pathname === "/about" ? "#0f7a06" : ""}
          bgColor={router.pathname === "/about" ? "#e3ffe2" : ""}
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          _focus={{
            boxShadow: "0 0 0 2px #24db14",
          }}
          variant="ghost"
        >
          About
        </Button>
      </Link>

      <Link href="/services">
        <Button
          size="sm"
          rounded="full"
          color={router.pathname === "/services" ? "#0f7a06" : ""}
          bgColor={router.pathname === "/services" ? "#e3ffe2" : ""}
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          _focus={{
            boxShadow: "0 0 0 2px #24db14",
          }}
          variant="ghost"
        >
          Our Services
        </Button>
      </Link>

      <Menu closeOnSelect={true} isLazy offset={[2, 3]}>
        <MenuButton
          size="sm"
          rounded="full"
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          _focus={{
            boxShadow: "0 0 0 2px #24db14",
          }}
          variant="ghost"
          as={Button}
        >
          Our Solutions
        </MenuButton>
        <MenuList>
          <Link href="/accounting-software-solution">
            <MenuItem
              fontSize="sm"
              bgColor={
                router.pathname === "/accounting-software-solution"
                  ? "primary.100"
                  : ""
              }
            >
              Accounting Software Solution
            </MenuItem>
          </Link>
          <Link href="/general-insurance">
            <MenuItem
              bgColor={
                router.pathname === "/general-insurance" ? "primary.100" : ""
              }
              fontSize="sm"
            >
              General Insurance Management
            </MenuItem>
          </Link>
          <Link href="/hmo-insurance-management-solution">
            <MenuItem
              bgColor={
                router.pathname === "/hmo-insurance-management-solution"
                  ? "primary.100"
                  : ""
              }
              fontSize="sm"
            >
              HMO Insurance Management Solution
            </MenuItem>
          </Link>
          <Link href="/human-resource-management-solution">
            <MenuItem
              bgColor={
                router.pathname === "/human-resource-management-solution"
                  ? "primary.100"
                  : ""
              }
              fontSize="sm"
            >
              Human Resource Management Solution
            </MenuItem>
          </Link>
          <Link href="/insurance-broker-management-platform">
            <MenuItem
              bgColor={
                router.pathname === "/insurance-broker-management-platform"
                  ? "primary.100"
                  : ""
              }
              fontSize="sm"
            >
              Insurance broker Management Platform
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Link href="/contact">
        <Button
          size="sm"
          rounded="full"
          color={router.pathname === "/contact" ? "#0f7a06" : ""}
          bgColor={router.pathname === "/contact" ? "#e3ffe2" : ""}
          _hover={{
            bgColor: "#e3ffe2",
            transition: "all 0.5s ease-in-out",
          }}
          _active={{
            bgColor: "#8ef985",
          }}
          _focus={{
            boxShadow: "0 0 0 2px #24db14",
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
