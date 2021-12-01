import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { servicesCategory } from "../../data";
import {
  InputFieldProps,
  SelectFieldProps,
  serviceCategory,
  TextAreaFieldProps,
} from "../../interfaces";

export const TextAreaField = ({
  name,
  label,
  handleChange,
  placeHolder,
  value,
}: TextAreaFieldProps) => {
  return (
    <FormControl id={name}>
      <FormLabel fontSize="14px">{label}</FormLabel>
      <Textarea
        value={value}
        isRequired
        name={name}
        onChange={handleChange}
        type="text"
        borderRadius="md"
        minH="100px"
        maxH="100px"
        fontSize={{ base: "xs", md: "14px" }}
        bg="white"
        placeholder={placeHolder}
      />
    </FormControl>
  );
};

export const InputField = ({
  name,
  label,
  handleChange,
  placeHolder,
  value,
}: InputFieldProps) => {
  return (
    <FormControl id={name}>
      <FormLabel fontSize="14px">{label}</FormLabel>
      <Input
        value={value}
        isRequired
        name={name}
        onChange={handleChange}
        type={name === "email" ? "email" : "text"}
        borderRadius="md"
        fontSize={{ base: "xs", md: "14px" }}
        bg="white"
        placeholder={placeHolder}
      />
    </FormControl>
  );
};

export const SelectField = ({
  name,
  value,
  handleChange,
  placeHolder,
}: SelectFieldProps) => {
  return (
    <FormControl id={name}>
      <FormLabel fontSize="14px">Select service..</FormLabel>
      <Select
        value={value}
        isRequired
        name={name}
        onChange={handleChange}
        borderRadius="md"
        fontSize={{ base: "xs", md: "14px" }}
        bg="white"
        placeholder={placeHolder}
      >
        {servicesCategory.map(
          ({ serviceId, serviceCategory }: serviceCategory) => (
            <option key={serviceId} value={serviceCategory}>
              {serviceCategory}
            </option>
          )
        )}
      </Select>
    </FormControl>
  );
};
