import { Button } from "@chakra-ui/button";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChakraNextImage } from "../ChakraImage/ChakraImage";

import { swiperItems2 } from "../../data";
import { SwipeDetails } from "../../interfaces";

const SectionTwo = (): JSX.Element => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Heading
          textAlign="center"
          fontSize={{ base: "25px", md: "3xl" }}
          color="#8ef985"
        >
          OUR SOLUTION
        </Heading>
        <Text color="#fff" textStyle="defaultText" mt={1} textAlign="center">
          SOLUTIONS WE HAVE BUILT
        </Text>
        <Swiper
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          lazy={true}
          navigation={true}
          autoplay={{
            delay: 7000,
          }}
          spaceBetween={50}
          grabCursor={true}
        >
          {swiperItems2.map(({ imageSrc, text, title }: SwipeDetails, i) => (
            <SwiperSlide key={i}>
              <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "35% 65%" }}
                gap={{ base: "0em", md: "4em" }}
                alignItems="center"
                height={{ base: "600px", md: "400px" }}
              >
                <GridItem
                  justifySelf={{ base: "center", md: "" }}
                  width={{ base: "380px", md: "100%" }}
                  height={{ base: "150px", md: "initial" }}
                >
                  <ChakraNextImage
                    rounded="lg"
                    width="500px"
                    height="300.26px"
                    src={imageSrc}
                    alt="Accounting"
                    priority={true}
                  />
                </GridItem>
                <GridItem width="100%" color="white">
                  <Heading
                    w={{ base: "", md: "lg" }}
                    fontSize={{ base: "25px", md: "3xl" }}
                  >
                    {title}
                  </Heading>
                  <Text
                    w={{ base: "", md: "80%" }}
                    lineHeight="1.7"
                    fontSize={{ base: "sm", md: "15px" }}
                    my={5}
                  >
                    {text}
                  </Text>
                  <Button
                    size="sm"
                    rounded="full"
                    color="#1A202C"
                    _hover={{
                      bgColor: "#8ef985",
                    }}
                    _active={{
                      bgColor: "#8ef985",
                    }}
                    _focus={{
                      boxShadow: "0 0 0 2px #24db14",
                    }}
                    bgColor="#8ef985"
                  >
                    Read more
                  </Button>
                </GridItem>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default SectionTwo;
