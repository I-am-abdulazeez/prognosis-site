import { Box, Heading } from "@chakra-ui/layout";
import Navbar from "../components/Navbar";

const about = (): JSX.Element => {
  return (
    <Box>
      <Navbar />
      <Heading mt={2}>About Page</Heading>
    </Box>
  );
};

export default about;
