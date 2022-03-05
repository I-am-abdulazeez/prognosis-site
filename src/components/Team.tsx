import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import ScrollAnimation from "react-animate-on-scroll";

import { useBreakpointValue } from "@chakra-ui/media-query";

import { chakra } from "@chakra-ui/system";

import { ourTeam } from "@data/index";

const Team: React.FC = () => {
  const avatarSize = useBreakpointValue({ base: "lg", md: "lg" });

  return (
    <Box>
      <Container maxW="container.xl">
        <Box textAlign={{ base: "left", md: "center" }}>
          <Heading fontSize={{ base: "25px", md: "3xl" }}>
            Meet our <chakra.span color="#0FBF44">team</chakra.span>
          </Heading>
          <Text maxW="2xl" m="0 auto" mt={5}>
            We ensure that the period of conception and discussion of your needs
            are treated with utmost urgency and a delivery date is set aside and
            met.
          </Text>
        </Box>

        <SimpleGrid
          spacing={14}
          mt={{ base: "5rem", md: "8rem" }}
          columns={{ base: 1, md: 2 }}
        >
          {ourTeam.map(
            ({ userText, userAvatar, userPosition, username }, i) => (
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={true}
                key={i}
              >
                <Box alignItems="flex-start" as={HStack} spacing={4} key={i}>
                  <Avatar name={username} size={avatarSize} />
                  <Box>
                    <Heading
                      color="primary"
                      fontWeight="semibold"
                      fontSize={{ base: "18px", md: "xl" }}
                    >
                      {username}
                    </Heading>
                    <Text
                      mb={4}
                      fontSize="sm"
                      fontWeight="medium"
                      color="#718096"
                    >
                      {userPosition}
                    </Text>
                    <Text
                      fontSize={{ base: "sm", md: "14px" }}
                      lineHeight="1.7"
                    >
                      {userText}
                    </Text>
                  </Box>
                </Box>
              </ScrollAnimation>
            )
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Team;
