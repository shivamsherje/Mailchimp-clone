import {  LinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const TextComponent = ({children}) => {
  return (
    <Box mt={5} mb={5} _hover={{color:"teal",cursor:"pointer"}}>
      <Flex fontSize="xl">
        <Text  >{children}</Text>
        <Spacer />
        <LinkIcon />
      </Flex>
    </Box>
  );
};

export default TextComponent;
