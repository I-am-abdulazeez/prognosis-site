import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import Link from "next/link";

import { Box, Flex, Text } from "@chakra-ui/layout";
import SiteMetaData from "../components/SiteMetaData";

const ErrorPage: React.FC = () => {
  return (
    <Flex h="100vh" flexDir="column" justify="center" align="center">
      <SiteMetaData
        metaTitle="404 Page | Prognosis Technologies Limited"
        metaContent="Page Not Found Prognosis Technologies Limited"
        metaContent2="Page does not Exist | Pronosis Technologies Limited"
      />
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
