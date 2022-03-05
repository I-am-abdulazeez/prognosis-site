import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import { servicesCategory } from "@data/index";
import { SelectFieldProps, serviceCategory } from "@interfaces/index";

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  value,
  handleChange,
  placeHolder,
}) => {
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

export default SelectField;
