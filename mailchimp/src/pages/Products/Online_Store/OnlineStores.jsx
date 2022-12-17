import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

const OnlineStores = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"4xl"} pt={10} pb={16}>
        <Center>
          <Stack direction="column" spacing={4}>
            <Center>
              <Box mt={"7.5rem"} mb={"7.5rem"} w="85%">
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="2.5rem"
                  lineHeight={1}
                  color="#241c15"
                  letterSpacing="-.03125rem"
                >
                  Reach more people with your Mailchimp website
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Grow and engage a bigger, higher quality customer base with
                    intelligent tools that speak to an interested audience when
                    they’re most willing to listen.
                  </Text>
                </Box>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default OnlineStores;
