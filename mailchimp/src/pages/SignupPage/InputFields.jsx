import {  FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import PasswordSignup from "./PasswordSignup";

const InputFields = () => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          mb={5}
          size="lg"
          variant="outline"
          focusBorderColor="blue.500"
          placeholder="First name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          mb={5}
          size="lg"
          variant="outline"
          focusBorderColor="blue.500"
          placeholder="First name"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <PasswordSignup />
      </FormControl>
    </div>
  );
};

export default InputFields;
