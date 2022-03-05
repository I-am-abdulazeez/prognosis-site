import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { TextAreaFieldProps } from "../../../interfaces";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  handleChange,
  placeHolder,
  value,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel fontSize="14px">{label}</FormLabel>
      <Textarea
        value={value}
        isRequired
        name={name}
        onChange={handleChange}
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

export default TextAreaField;
