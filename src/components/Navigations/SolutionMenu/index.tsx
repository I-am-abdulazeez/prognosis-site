import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { menuLinks } from "@data/index";

const SolutionMenu: React.FC = () => {
  const router = useRouter();

  return (
    <Menu offset={[2, 3]} isLazy closeOnSelect={false}>
      <MenuButton
        size="sm"
        textAlign="left"
        _hover={{
          bgColor: "#e3ffe2",
          transition: "all 0.5s ease-in-out",
        }}
        _active={{
          bgColor: "#8ef985",
        }}
        variant="ghost"
        as={Button}
      >
        Our Solutions
      </MenuButton>
      <MenuList>
        {menuLinks.map(({ href, linkName }, idx) => (
          <Link href={href} key={idx}>
            <MenuItem
              bgColor={router.pathname === href ? "primary.100" : ""}
              fontSize="sm"
            >
              {linkName}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SolutionMenu;
