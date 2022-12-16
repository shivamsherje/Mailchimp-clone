import { Box, Text, Container, Center, Stack } from "@chakra-ui/react";
import React from "react";

const Heading5 = () => {
  return (
    <Box backgroundColor="#ffe6ff" w="100%">
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
           With Mailchimp, you can create and publish a stunning website in under an hour.
          </Text>
        </Center>
      </Container>
    </Box>
  )
}

export default Heading5