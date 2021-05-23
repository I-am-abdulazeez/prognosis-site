import { Button } from "@chakra-ui/button";
import { Box, Container, Flex } from "@chakra-ui/layout";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <Box p={2} pos="sticky" top={0}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Box>Prognosis App</Box>
          <Flex align="center" gridGap="0.9em" justify="space-between">
            <Link href="/">
              <Button size="sm" variant="ghost">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button size="sm" variant="ghost">
                About us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="sm" variant="ghost">
                Our Services
              </Button>
            </Link>
            <Link href="/solution">
              <Button size="sm" variant="ghost">
                Our Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" variant="ghost">
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
