import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import { InputFieldProps } from "@interfaces/index";

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  handleChange,
  placeHolder,
  value,
}) => {
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

export default InputField;
