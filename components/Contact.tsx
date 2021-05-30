import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";

const Contact = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Grid
        gap={{ base: "3em", md: "7em" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "55% 35%" }}
      >
        <GridItem>
          <Stack direction="column" spacing={7}>
            <Heading
              w={{ base: "100%", md: "70%" }}
              fontSize={{ base: "25px", md: "4xl" }}
            >
              Let us deliver on your project needs
            </Heading>
            <Text w={{ base: "100%", md: "80%" }} textStyle="defaultText">
              Our team of professional developers and business analyst are
              always willing to hear about your project need and design custom
              solutions that are guaranteed to give your business the winning
              edge. Reach out to us via our project inquiry form. We will
              respond back to you in no time.
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={5} direction="column">
            <FormControl>
              <Input
                _focus={{
                  borderColor: "#19aa0c",
                  boxShadow: "0 0 0 1px #19aa0c",
                }}
                fontSize={{ base: "xs", md: "inherit" }}
                bg="white"
                placeholder="Enter name..."
              />
            </FormControl>
            <HStack spacing={3}>
              <FormControl>
                <Input
                  bg="white"
                  fontSize={{ base: "xs", md: "inherit" }}
                  _focus={{
                    borderColor: "#19aa0c",
                    boxShadow: "0 0 0 1px #19aa0c",
                  }}
                  placeholder="Company name..."
                />
              </FormControl>
              <FormControl>
                <Input
                  _focus={{
                    borderColor: "#19aa0c",
                    boxShadow: "0 0 0 1px #19aa0c",
                  }}
                  fontSize={{ base: "xs", md: "inherit" }}
                  bg="white"
                  placeholder="Email Address..."
                />
              </FormControl>
            </HStack>
            <FormControl>
              <Select
                _focus={{
                  borderColor: "#19aa0c",
                  boxShadow: "0 0 0 1px #19aa0c",
                }}
                fontSize={{ base: "xs", md: "inherit" }}
                bg="white"
                placeholder="Select service..."
              >
                <option value="generalinquiry">General Inquiry</option>
                <option value="customersupport">Customer Support</option>
                <option value="accountingsolutions">
                  Accounting Solutions
                </option>
                <option value="healthinsurancemanagementsolutions">
                  Health Insurance Management Solutions
                </option>
                <option value="insurancemanagementsolutions">
                  Insurance Management Solution
                </option>
                <option value="humanresourcesmanagementsolution">
                  Human Resources Management Solution
                </option>
              </Select>
            </FormControl>
            <FormControl>
              <Textarea
                minH="100px"
                maxH="100px"
                _focus={{
                  borderColor: "#19aa0c",
                  boxShadow: "0 0 0 1px #19aa0c",
                }}
                fontSize={{ base: "xs", md: "inherit" }}
                bg="white"
                placeholder="Describe your project..."
              />
            </FormControl>
            <Box>
              <Button
                variant="solid"
                bgColor="#1A202C"
                rounded="full"
                size="sm"
                color="white"
                _hover={{
                  bgColor: "#1A202C",
                }}
                _active={{
                  bgColor: "#1A202C",
                }}
                _focus={{
                  boxShadow: "0 0 0 3px #1A202C",
                }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Contact;
