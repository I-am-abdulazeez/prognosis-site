import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Container, Flex } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

import { ChakraNextImage } from "../../ChakraImage/ChakraImage";
import LargeScreenLinks from "../LargeScreen";
import SmallScreenLinks from "../SmallScreen";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      py={1}
      left={0}
      top={0}
      right={0}
      bg="white"
      zIndex={4}
      w="full"
      position="sticky"
      boxShadow="sm"
      transition="box-shadow 0.2s , background-color 0.2s ease-in-out"
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Link href="/">
            <a>
              <ChakraNextImage
                width="140px"
                height="66px"
                src="/images/Prognosis.png"
                alt="logo"
              />
            </a>
          </Link>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="menu-icon"
              icon={<HiMenuAlt3 size="22px" />}
              onClick={onOpen}
              size="sm"
              variant="solid"
              colorScheme="primary"
            />
          </Box>
          <LargeScreenLinks />
          <Drawer
            closeOnOverlayClick={false}
            isOpen={isOpen}
            size="xs"
            placement="left"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton size="sm" rounded="full" />
              <DrawerHeader>
                <ChakraNextImage
                  width="120px"
                  height="55px"
                  src="/images/Prognosis.png"
                  alt="logo"
                />
              </DrawerHeader>
              <DrawerBody>
                <SmallScreenLinks />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
