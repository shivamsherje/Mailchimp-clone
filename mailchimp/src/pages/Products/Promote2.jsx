import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const Promote2 = () => {
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
        <Center>
          <Stack direction="row" spacing={4}>
            <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }}>
              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Built-In Forms
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Capture the attention of your website visitors with a custom
                    pop-up form.
                  </Text>
                </Box>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                    textDecor={"underline"}
                    _hover={{
                      cursor: "pointer",
                      color: "#e7b75f",
                    }}
                  >
                    Learn More
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Behavioral Targeting
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Send personalized emails to visitors based on how they
                    interact with your site.
                  </Text>
                </Box>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                    textDecor={"underline"}
                    _hover={{
                      cursor: "pointer",
                      color: "#e7b75f",
                    }}
                  >
                    Learn More
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Reports And Analytics
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Use free reports to track the performance of your pages and
                    refine as you go.
                  </Text>
                </Box>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                    textDecor={"underline"}
                    _hover={{
                      cursor: "pointer",
                      color: "#e7b75f",
                    }}
                  >
                    Learn More
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Promote2;
