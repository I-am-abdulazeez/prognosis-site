import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialItems } from "../data";
import { TestimonialDetails } from "../interfaces";

const Testimonials: React.FC = () => {
  const avatarSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      lazy={true}
      autoplay={{
        delay: 7000,
      }}
      spaceBetween={30}
      grabCursor={true}
    >
      {testimonialItems.map(
        ({ text, userName, userDetails, userImage }: TestimonialDetails, i) => (
          <SwiperSlide key={i}>
            <Flex
              height={{ base: "420px", md: "450px" }}
              justify="center"
              direction="column"
            >
              <Image
                width={{ base: "66.34", md: "77.34" }}
                height="65.12"
                src="/images/quote.svg"
              />
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
                <Avatar name={userName} size={avatarSize} />
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
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Testimonials;
