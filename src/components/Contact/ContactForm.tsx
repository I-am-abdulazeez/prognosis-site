import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { RiSendPlaneLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/toast";

import TextAreaField from "../FormFields/TextAreaField";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";

import { FormInput } from "../../interfaces";

const ContactForm = (): JSX.Element => {
  const toast = useToast();
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormInput>({
    companyName: "",
    email: "",
    message: "",
    name: "",
    service: "",
  });
  const { companyName, name, message, email, service } = formState;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const sendMail = async (e: any) => {
    e.preventDefault();
    const newFormState: FormInput = {
      companyName,
      email,
      message,
      name,
      service,
    };
    setisSubmitting(true);
    try {
      await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFormState),
      });
      setisSubmitting(false);
      setFormState({
        companyName: "",
        email: "",
        message: "",
        name: "",
        service: "",
      });
      toast({
        title: "Message Sent!",
        description: "Prognosis Technologies Limited will get back to you.",
        status: "success",
        duration: 5000,
        variant: "top-accent",
        position: "bottom",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      setisSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Prognosis Technologies Limited didn't receive the mail",
        status: "error",
        position: "bottom",
        variant: "top-accent",
        isClosable: true,
      });
    }
  };

  return (
    <chakra.form onSubmit={sendMail}>
      <Stack spacing={4} direction="column">
        <HStack>
          <InputField
            name="name"
            placeHolder="Enter name..."
            label="Name:"
            value={name}
            handleChange={handleChange}
          />
          <InputField
            name="companyName"
            placeHolder="Company name..."
            label="Company Name:"
            value={companyName}
            handleChange={handleChange}
          />
        </HStack>
        <HStack spacing={3}>
          <InputField
            name="email"
            placeHolder="Email Address..."
            label="Email Address:"
            value={email}
            handleChange={handleChange}
          />
          <SelectField
            handleChange={handleChange}
            label="Drink Category"
            name="service"
            placeHolder="Select service..."
            value={service}
          />
        </HStack>

        <TextAreaField
          handleChange={handleChange}
          label="Describe your Message:"
          name="message"
          placeHolder="Select service..."
          value={message}
        />

        <Box>
          <Button
            variant="solid"
            bgColor="#1A202C"
            size="sm"
            type="submit"
            color="white"
            disabled={isSubmitting}
            rounded="full"
            isLoading={isSubmitting}
            rightIcon={<RiSendPlaneLine />}
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
            Send
          </Button>
        </Box>
      </Stack>
    </chakra.form>
  );
};

export default ContactForm;
