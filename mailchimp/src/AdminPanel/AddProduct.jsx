import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  FormHelperText,
  Button,
  Input,
  Center,
  Box,
} from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";

function AddProduct({ onAddProduct }) {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    pricing: "",
    desc: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({
      ...formState,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formState);
  };

  return (
    <Box
      w="100%"
      pt={10}
      pb={10}
      color="white"
      backgroundColor="#0093E9"
      backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        borderRadius="10px"
        backgroundImage="radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% )"
      >
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Website Name</FormLabel>
              <Input
                name="title"
                type="text"
                placeholder="Website Name"
                value={formState.title}
                onChange={handleChange}
                mb={"10px"}
                borderLeft="none"
                borderRight={"none"}
                borderTop={"none"}
                borderRadius={0}
              />
              <FormLabel>Category</FormLabel>
              <Input
                name="category"
                type="text"
                placeholder="category"
                value={formState.category}
                onChange={handleChange}
                borderLeft="none"
                borderRight={"none"}
                borderTop={"none"}
                borderRadius={0}
              />
              <FormHelperText textAlign={"left"} mb={"10px"}>
                eg: Blog, E-commarce, SocialMedia
              </FormHelperText>
              {/* <FormLabel>Category</FormLabel> */}
              {/* <Input
          name="category"
          type="text"
          placeholder="Category"
          value={formState.category}
          onChange={handleChange}
        /> */}
              <FormLabel>Pricing</FormLabel>
              <Select
                placeholder="Select option"
                name="pricing"
                type="text"
                onChange={handleChange}
                mb={"10px"}
                borderLeft="none"
                borderRight={"none"}
                borderTop={"none"}
                borderRadius={0}
                
                color={"grey"}
              >
                <option
                  color={"black"}
                 
                  value="Premium 23,000/month"
                >
                  Premium 23,000/month
                </option>
                <option value="Standard 1,150/month">
                  Standard 1,150/month
                </option>
                <option value="Essential 770/month">
                  Essential 770/month
                </option>
                <option value="30 Days Free Trial">
                  30 Days Free Trial
                </option>
              </Select>
              <FormLabel>Website Description</FormLabel>
              <Input
                name="desc"
                type="text"
                placeholder="Website Description"
                value={formState.desc}
                onChange={handleChange}
                mb={"10px"}
                borderLeft="none"
                borderRight={"none"}
                borderTop={"none"}
                borderRadius={0}
              />
              <FormLabel>Website Logo</FormLabel>
              <Input
                name="image"
                type="url"
                placeholder="Logo URL"
                value={formState.image}
                onChange={handleChange}
                mb={"10px"}
                borderLeft="none"
                borderRight={"none"}
                borderTop={"none"}
                borderRadius={0}
              />
              <Center>
                <Button
                  mt="20px"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Create Website
                </Button>
              </Center>
            </FormControl>
          </form>
        </Box>
      </Stack>
    </Box>
  );
}

export default AddProduct;
