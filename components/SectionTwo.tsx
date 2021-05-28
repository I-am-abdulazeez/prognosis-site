import { Button } from "@chakra-ui/button";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Swiper from "react-id-swiper";
import { ChakraImage } from "../utils";

interface SwipeDetails {
  imageSrc: string;
  title: string;
  text: string;
}

const swiperItems: SwipeDetails[] = [
  {
    imageSrc: "/images/accounting.jpg",
    title: "Accounting Solution",
    text: "Take control of your business finances, we have designed our accounting solution to provide business owners with a full spectrum of features guaranteed to help them manage all aspects of their business finance.",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "Health Insurance Management Solution",
    text: "We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.",
  },
  {
    imageSrc: "/images/insurance.jpg",
    title: "Insurance Management Solution",
    text: "We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.",
  },
];

const SectionTwo = (): JSX.Element => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Heading
          textAlign="center"
          fontSize={{ base: "25px", md: "4xl" }}
          color="#8ef985"
        >
          OUR SOLUTION
        </Heading>
        <Text
          color="#fff"
          fontSize={{ base: "sm", md: "15px" }}
          mt={1}
          textAlign="center"
        >
          SOLUTIONS WE HAVE BUILT
        </Text>
        <Swiper
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          lazy={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 7000,
          }}
          spaceBetween={50}
          grabCursor={true}
        >
          {swiperItems.map(({ imageSrc, text, title }, i) => (
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "35% 65%" }}
              key={i}
              gap={{ base: "0em", md: "4em" }}
              alignItems="center"
              height={{ base: "600px", md: "500px" }}
            >
              <GridItem
                justifySelf={{ base: "center", md: "" }}
                width={{ base: "300px", md: "100%" }}
                height={{ base: "100px", md: "initial" }}
              >
                <ChakraImage
                  rounded="lg"
                  width="500px"
                  height="300.26px"
                  src={imageSrc}
                  alt="Accounting"
                />
              </GridItem>
              <GridItem
                width="100%"
                color="white"
                textAlign={{ base: "center", md: "inherit" }}
              >
                <Heading
                  w={{ base: "", md: "lg" }}
                  fontSize={{ base: "25px", md: "4xl" }}
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
                    boxShadow: "0 0 0 3px #24db14",
                  }}
                  bgColor="#8ef985"
                >
                  Learn more
                </Button>
              </GridItem>
            </Grid>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default SectionTwo;
