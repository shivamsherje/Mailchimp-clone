import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const Promote = () => {
  return (
    <Box backgroundColor="#f2f2f2" w="100%">
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
                  Promote your site and build an audience with our all-in-one
                  platform
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    We help you establish your brand, look like a pro, and rise
                    the ranks of search engines using our easy-to-use website
                    builder. Customize your website on a no-code platform so
                    that you don't need to hire anyone else to help.
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
                  Domains
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Purchase a domain or connect an existing one to your
                    website.
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
                  SEO Tools
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Custom social posts, SSL certificates, rapid speed,
                    responsive design, and more.
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
                    Add Google Workspace to your domain purchase to use Google
                    suite features.
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

export default Promote;
