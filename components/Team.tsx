import { Avatar } from "@chakra-ui/avatar";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { chakra } from "@chakra-ui/system";
import ScrollAnimation from "react-animate-on-scroll";

interface TeamList {
  username: string;
  userPosition: string;
  userAvatar: string;
  userText: string;
}

const ourTeam: TeamList[] = [
  {
    username: "Calisto Zulu",
    userPosition: "Founder & CEO",
    userAvatar: "",
    userText:
      "We ensure that the period of conception and discussion of your needs are treated with utmost urgency and a delivery date is set aside and met.",
  },
  {
    username: "Ifeanyi Info",
    userPosition: "Founder & CEO",
    userAvatar: "",
    userText:
      "We ensure that the period of conception and discussion of your needs are treated with utmost urgency and a delivery date is set aside and met.",
  },
  {
    username: "Abdullahi Mustapha",
    userPosition: "Founder & CEO",
    userAvatar: "",
    userText:
      "We ensure that the period of conception and discussion of your needs are treated with utmost urgency and a delivery date is set aside and met.",
  },
];

const Team = (): JSX.Element => {
  const avatarSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Box>
      <Heading textAlign="center" fontSize={{ base: "25px", md: "4xl" }}>
        Our <chakra.span color="#0FBF44">Team</chakra.span>
      </Heading>

      <Container maxW="container.xl">
        <SimpleGrid spacing={3} mt={9} columns={{ base: 1, md: 3 }}>
          {ourTeam.map(
            ({ userText, userAvatar, userPosition, username }, i) => (
              <ScrollAnimation animateIn="animate__fadeInUp">
                <Box
                  rounded="lg"
                  _hover={{
                    transition: "all 0.8s ease-in-out",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    cursor: "pointer",
                  }}
                  key={i}
                  p={8}
                  textAlign="center"
                >
                  <Avatar name={username} size={avatarSize} my={5} />
                  <Heading fontSize={{ base: "18px", md: "2xl" }}>
                    {username}
                  </Heading>
                  <Text mb={4} fontSize="sm" color="#718096">
                    {userPosition}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                    {userText}
                  </Text>
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
