import { Text, Box, Container, Stack, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const BelowLinks = () => {
  return (
    <Box backgroundColor="#F5F5F5" w="100%" fontSize={"0.8125rem"}>
      <Container as={Stack} maxW={"8xl"} pt={5} pb={5}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 4 }} gap={4}>
          <Text textDecor={"none"}>Related Links:</Text>
          <Text textDecor={"underline"} _hover={{ cursor: "pointer", color: "#EEA800" }}>E-commerce Website</Text>
          <Text textDecor={"underline"} _hover={{ cursor: "pointer", color: "#EEA800" }}>E-How to Build an E‑Commerce Website</Text>
          <Text textDecor={"underline"} _hover={{ cursor: "pointer", color: "#EEA800" }}>What are the benefits of online shopping carts?</Text>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BelowLinks;
