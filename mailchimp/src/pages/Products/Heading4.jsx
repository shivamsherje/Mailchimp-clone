import { Box, Text, Container, Center, Stack } from "@chakra-ui/react";
import React from "react";

const Heading4 = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"4xl"} pt={10} pb={16}>
        <Center>
          <Text
            fontWeight="300"
            fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
            fontSize="2.5rem"
            lineHeight={1}
            color="#241c15"
            letterSpacing="-.03125rem"
          >
            Sell products and accept appointments from your site
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Heading4;
