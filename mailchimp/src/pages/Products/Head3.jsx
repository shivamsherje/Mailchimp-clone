import React from "react";
import { Center, Container, Stack, Text, Box } from "@chakra-ui/react";

const Head3 = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"4xl"} pt={10} pb={16}>
        <Center>
          <Stack direction="column" spacing={4}>
            <Text
              mt={"1.75rem"}
              fontWeight="300"
              fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
              fontSize="2.5rem"
              lineHeight={1}
              color="#241c15"
              letterSpacing="-.03125rem"
            >
              Brilliant web design, simplified
            </Text>
            <Text
              mt={"1.875rem"}
              fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
              fontSize="1em"
              lineHeingt="1.5"
              color="#241c15"
              fontWeight="400"
            >
              Our website builder helps bring your unique vision to life—no
              design or code experience required. Create a customizable,
              mobile-optimized website within the hour. All you need to start is
              a domain name and a vision for your website. If you're building a
              small business website, online store, or otherwise, Mailchimp can
              simplify the process.
            </Text>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Head3;
