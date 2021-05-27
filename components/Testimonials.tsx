import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Swiper from "react-id-swiper";
import { ChakraImage } from "../utils";

interface TestimonialDetails {
  userImage: string;
  text: string;
  userName: string;
  userDetails: string;
}

const testimonialItems: TestimonialDetails[] = [
  {
    userImage: "/images/user-1.svg",
    userName: "Marrie Jones",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-2.svg",
    userName: "John Doe",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-3.svg",
    userName: "Abubakar Muhammad",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-4.svg",
    userName: "Stephen Dickson",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
];

const Testimonials = () => {
  return (
    <Flex justify="center">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        lazy={true}
        autoplay={{
          delay: 7000,
        }}
        spaceBetween={50}
        grabCursor={true}
      >
        {testimonialItems.map(({ text, userName, userDetails }, i) => (
          <Flex height="450px" justify="center" key={i} direction="column">
            <ChakraImage width="77.34" height="65.12" src="/images/quote.svg" />
            <Box justifySelf="center" mt={10}>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                textAlign="center"
                width={{ base: "300px", md: "500px" }}
                m="0 auto"
              >
                {text}
              </Text>
            </Box>
            <Box mt={8} mb={4} textAlign="center">
              <Avatar name={userName} size="lg" />
            </Box>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "15px" }}>
                {userName}
              </Text>
              <Text color="#718096" fontSize={{ base: "sm", md: "15px" }}>
                {userDetails}
              </Text>
            </Box>
          </Flex>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Testimonials;
