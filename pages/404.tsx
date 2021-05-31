import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Head from "next/head";
import Link from "next/link";

const ErrorPage = (): JSX.Element => {
  return (
    <Flex h="100vh" flexDir="column" justify="center" align="center">
      <Head>
        <title>404 | Prognosis Technology</title>
        <meta name="description" content="Prognosis Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m="0 auto" w={{ base: "80px", md: "120px" }} mb={5}>
        <Image
          width={{ base: "80px", md: "120px" }}
          height={{ base: "80px", md: "120px" }}
          src="/images/sad.svg"
          alt="Sad Svg"
        />
      </Box>
      <Text mb={3}>Page cannot be found on this site</Text>
      <Link href="/">
        <Button
          size="sm"
          rounded="full"
          _focus={{
            boxShadow: "0 0 0 3px #63f756",
          }}
          colorScheme="primary"
          variant="ghost"
        >
          Take me home
        </Button>
      </Link>
    </Flex>
  );
};

export default ErrorPage;
