import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const MoreWays = () => {
  return (
    <Box backgroundColor="#f2f2f2" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={10} pb={16}>
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
                  Even more ways to help you succeed
                </Text>
              </Box>
            </Center>
          </Stack>
        </Center>
        <Center>
          <Stack direction="row" spacing={4}>
            <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} gap={6}>
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
                  24/7 help along the way
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Even free users get 30 days of email access to our
                    award-winning support team.
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
                    About Support
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
                  Free appointment scheduling
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Offer services and manage scheduling from the same place you
                    run your online store.
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
                    About appointments
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
                  Google Workspace
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Create an email address for your domain name, and use tools
                    like Drive and Calendar.
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
                    About Google Workspace
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

export default MoreWays;
