import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { Swiper, SwiperSlide } from "swiper/react";

import TabSection from "./TabSection";

import { swiperItems } from "@data/index";
import { SwipeCardDetails } from "@interfaces/index";

const MotionBox = motion(Box);

const ServicesSection: React.FC = () => {
  return (
    <Box>
      <div>
        <Container maxW="container.xl">
          <Grid
            pt="4em"
            gap={{ base: "1.5em", md: "" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "60% 40%" }}
            height={{ base: "800px", md: "450px" }}
          >
            <GridItem>
              <Box>
                <Heading
                  w={{ base: "100%", md: "60%" }}
                  fontSize={{ base: "25px", md: "3xl" }}
                >
                  Redefining Industries with{" "}
                  <chakra.span color="#0FBF44">Technology</chakra.span>
                </Heading>
                <Text mt={3} w={{ base: "100%", md: "650px" }}>
                  In today’s world of fast paced digitization, every industry
                  requires innovation and novel application of technology.
                  Prognosis technologies, as a 21st century software development
                  company, has over the years built a professional capacity for
                  helping organizations across various verticals with their
                  technology needs. Our technologies and solutions are adaptable
                  for clients across the following verticals:
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <AspectRatio
                borderRadius="md"
                h="18em"
                maxW="500px"
                ratio={4 / 3}
              >
                <iframe
                  title="Prognosis Site Intro"
                  src="https://www.youtube.com/embed/Qq6LT7lVGM4"
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </div>
      <Box py="3em" textAlign="center" bg="#1A202C">
        <Container maxW="container.xl">
          <Heading mb="2em" fontSize={{ base: "25px", md: "3xl" }} color="#fff">
            OUR DEDICATED <chakra.span color="#0FBF44">SOLUTIONS</chakra.span>
          </Heading>
          <Swiper
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
            lazy={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={40}
          >
            {swiperItems.map(
              ({ text, imageSrc, title, link }: SwipeCardDetails, i) => (
                <SwiperSlide key={i}>
                  <Box height="300px" cursor="pointer">
                    <MotionBox
                      height={{ base: "250px", md: "200px" }}
                      p={6}
                      bgPos="center"
                      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageSrc})`}
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      key={i}
                      rounded="xl"
                      whileHover={{ scale: 1.1 }}
                      textAlign="left"
                      color="white"
                    >
                      <Heading
                        as="a"
                        href={link}
                        fontSize={{ base: "25px", md: "lg" }}
                      >
                        {title}
                      </Heading>
                      <Text
                        lineHeight="1.7"
                        fontSize={{ base: "sm", md: "15px" }}
                        mt={4}
                      >
                        {text}
                      </Text>
                    </MotionBox>
                  </Box>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Container>
      </Box>
      <Box py="4em">
        <TabSection />
      </Box>
      <Box py="4em" bg="#EEF2F6">
        <Container maxW="container.xl">
          <Grid
            gap="4em"
            alignItems="center"
            templateColumns={{ base: "repeat(1, 1fr)", md: "40% 60%" }}
          >
            <GridItem>
              <AspectRatio
                borderRadius="md"
                h="18em"
                maxW="500px"
                ratio={4 / 3}
              >
                <iframe
                  title="Prognosis Site Intro"
                  src="https://www.youtube.com/embed/Qq6LT7lVGM4"
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
            <GridItem>
              <Box>
                <Heading fontSize={{ base: "25px", md: "3xl" }}>
                  Transform Your Business with {""}
                  <chakra.span color="#0FBF44">
                    our Enterprise Resource Planning (ERP) Solutions
                  </chakra.span>
                </Heading>
                <Text mt={5} textStyle="defaultText">
                  Creating one-of-a-kind software for corporate customers is a
                  cornerstone of our expertise. Our ERP solutions are built to
                  hone critical business processes and functions, including
                  inventory management, accounting, human resources,
                  construction management, and more. Our team of top-notch
                  business analyst, quality assurance specialist, and software
                  engineers are equipped to create dynamic web systems for our
                  customers irrespective of company size or industry.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesSection;
