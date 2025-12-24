import { Container, Heading, Box } from "@chakra-ui/layout";
import { keyframes } from "@chakra-ui/system";

import { ChakraNextImage } from "./ChakraImage/ChakraImage";
import { clientImage } from "@data/index";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Client: React.FC = () => {
  // Create multiple copies for truly seamless scrolling
  const repeatedImages = [...clientImage, ...clientImage, ...clientImage];

  return (
    <Container maxW="container.xl">
      <Heading
        w={{ base: "100%", md: "80%" }}
        fontSize={{ base: "25px", md: "3xl" }}
      >
        Clients who trust us...
      </Heading>

      <Box
        mt={{ base: 7, md: 14 }}
        overflow="hidden"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to right, white, transparent)",
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to left, white, transparent)",
          zIndex: 2,
        }}
      >
        <Box
          display="flex"
          gap={{ base: "3em", md: "5em" }}
          alignItems="center"
          animation={`${scroll} 45s linear infinite`}
          width="fit-content"
        >
          {repeatedImages.map(({ alt, src, width, height }, idx) => {
            // Calculate proportional dimensions to keep aspect ratio
            const maxWidth = 120;
            const maxHeight = 80;
            const aspectRatio = parseInt(width) / parseInt(height);

            let displayWidth = maxWidth;
            let displayHeight = maxWidth / aspectRatio;

            if (displayHeight > maxHeight) {
              displayHeight = maxHeight;
              displayWidth = maxHeight * aspectRatio;
            }

            return (
              <Box
                key={`${alt}-${idx}`}
                flexShrink={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={{ base: "60px", md: "80px" }}
              >
                <ChakraNextImage
                  width={parseInt(width)}
                  height={parseInt(height)}
                  src={src}
                  alt={alt}
                  maxW={{
                    base: `${displayWidth * 0.7}px`,
                    md: `${displayWidth}px`,
                  }}
                  maxH={{
                    base: `${displayHeight * 0.7}px`,
                    md: `${displayHeight}px`,
                  }}
                  objectFit="contain"
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Client;
