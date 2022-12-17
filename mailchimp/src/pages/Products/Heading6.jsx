import { Box, Text, Container, Center, Stack } from "@chakra-ui/react";
import React from "react";

const Heading6 = () => {
  return (
    <Box backgroundColor="#ffe6ff" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={20} pb={16}>
        <Center>
          <Text
            fontWeight="300"
            fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
            fontSize="2.5rem"
            lineHeight={1}
            color="#241c15"
            letterSpacing="-.03125rem"
          >
            “As a brand new startup, we used CyberDomain's website builder to
            get our story and business online quickly and easily. This intuitive
            builder makes trying out new ideas and adding updates
            straightforward and uncomplicated.”
          </Text>
        </Center>
        <Center>
          <Text
            fontSize="0.8125rem"
            fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
            lineHeight={1.25}
            color="rgba(36,28,21,0.65)"
            mt={8}
            pb={16}
          >
            Dr. Julie Durnan, Founder of The Ginger Agency
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Heading6;
