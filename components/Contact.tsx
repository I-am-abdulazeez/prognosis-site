import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
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
} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { useToast } from "@chakra-ui/toast";
import { useForm, SubmitHandler } from "react-hook-form";

enum ServicesEnum {
  generalinquiry = "generalinquiry",
  customersupport = "customersupport",
  healthinsurancemanagementsolutions = "healthinsurancemanagementsolutions",
  insurancemanagementsolutions = "insurancemanagementsolutions",
  humanresourcesmanagementsolution = "humanresourcesmanagementsolution",
}

interface IFormInput {
  name: string;
  companyName: string;
  email: string;
  services: ServicesEnum;
  message: string;
}

const Contact = (): JSX.Element => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<IFormInput>({
    mode: "onSubmit",
  });

  const sendMail: SubmitHandler<IFormInput> = async (data) => {
    try {
      await fetch("/api/sendMail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      setTimeout(() => reset(), 2000);
      toast({
        title: "Message Sent!",
        description: "Prognosis Technologies Limited will get back to you.",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description: "Prognosis Technologies Limited didn't receive the mail",
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleError = (errors: any) => {
    console.log(errors);
  };

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
          <form onSubmit={handleSubmit(sendMail)}>
            <Stack spacing={4} direction="column">
              <HStack>
                <FormControl isInvalid={errors.name && touchedFields.name}>
                  <FormLabel fontSize="14px" htmlFor="name">
                    Name:
                  </FormLabel>
                  <Input
                    isRequired
                    id="name"
                    {...register("name", {
                      min: 4,
                      max: 30,
                    })}
                    _focus={{
                      borderColor: "#19aa0c",
                      boxShadow: "0 0 0 1px #19aa0c",
                    }}
                    fontSize={{ base: "xs", md: "14px" }}
                    bg="white"
                    placeholder="Enter name..."
                  />
                </FormControl>
                <FormControl
                  isInvalid={errors.companyName && touchedFields.companyName}
                >
                  <FormLabel fontSize="14px" htmlFor="companyName">
                    Company Name:
                  </FormLabel>
                  <Input
                    isRequired
                    id="companyName"
                    {...register("companyName", {
                      min: 4,
                      max: 30,
                    })}
                    bg="white"
                    fontSize={{ base: "xs", md: "14px" }}
                    _focus={{
                      borderColor: "#19aa0c",
                      boxShadow: "0 0 0 1px #19aa0c",
                    }}
                    placeholder="Company name..."
                  />
                </FormControl>
              </HStack>
              <HStack spacing={3}>
                <FormControl isInvalid={errors.email && touchedFields.email}>
                  <FormLabel fontSize="14px" htmlFor="email">
                    Email Address:
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    isRequired
                    placeholder="Email Address..."
                    {...register("email", {})}
                    _focus={{
                      borderColor: "#19aa0c",
                      boxShadow: "0 0 0 1px #19aa0c",
                    }}
                    fontSize={{ base: "xs", md: "14px" }}
                    bg="white"
                  />
                </FormControl>
                <FormControl
                  isInvalid={errors.services && touchedFields.services}
                >
                  <FormLabel fontSize="14px" htmlFor="services">
                    Select Service:
                  </FormLabel>
                  <Select
                    isRequired
                    id="services"
                    {...register("services")}
                    _focus={{
                      borderColor: "#19aa0c",
                      boxShadow: "0 0 0 1px #19aa0c",
                    }}
                    fontSize={{ base: "xs", md: "14px" }}
                    bg="white"
                    placeholder="Select service..."
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Accounting Solutions">
                      Accounting Solutions
                    </option>
                    <option value="Health Insurance Management Solutions">
                      Health Insurance Management Solutions
                    </option>
                    <option value="Insurance Management Solutions">
                      Insurance Management Solution
                    </option>
                    <option value="Human Resources Management Solution">
                      Human Resources Management Solution
                    </option>
                  </Select>
                </FormControl>
              </HStack>

              <FormControl isInvalid={errors.message && touchedFields.message}>
                <FormLabel fontSize="14px" htmlFor="message">
                  Describe your Message:
                </FormLabel>
                <Textarea
                  id="message"
                  isRequired
                  {...register("message", {
                    min: 10,
                    max: 200,
                  })}
                  minH="100px"
                  maxH="100px"
                  _focus={{
                    borderColor: "#19aa0c",
                    boxShadow: "0 0 0 1px #19aa0c",
                  }}
                  fontSize={{ base: "xs", md: "14px" }}
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
                  type="submit"
                  color="white"
                  isLoading={isSubmitting}
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
          </form>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Contact;
