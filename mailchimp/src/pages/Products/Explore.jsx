import {
  Box,
  Stack,
  Container,
  Flex,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Product.style.css";

const Explore = () => {
  return (
    <Box backgroundColor="white" w="100%" mt={-10}>
      <Container as={Stack} maxW={"6xl"} pt={0} pb={16}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={{ md: "16", sm: "0", base: "0" }}
        >
          <Stack
            direction="column"
            py={4}
            mt={{ md: "20%", sm: "0", base: "0" }}
          >
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
              >
                Explore all the ways you can build a more effective website
              </Text>
            </Box>
          </Stack>
          <Stack
            direction="column"
            py={4}
            mt={{ md: "20%", sm: "0", base: "0" }}
          >
            <Box>
              <Center>
                <Flex className="exptxt" gap={"15px"} mb={1}>
                  <Text pl={5} pr={5}>
                    How to Make a Website: A Guide for Building Your Website
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box
              borderTopWidth={1}
              borderStyle={"solid"}
              borderColor={"gray.700"}
            >
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2} mb={1}>
                  <Text pl={5} pr={5}>
                    Website Design Tips for Non-Designers
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box
              borderTopWidth={1}
              borderStyle={"solid"}
              borderColor={"gray.700"}
            >
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2} mb={1}>
                  <Text pl={5} pr={5}>
                    A Checklist for Better Website SEO
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box
              borderTopWidth={1}
              borderStyle={"solid"}
              borderColor={"gray.700"}
            >
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2}>
                  <Text pl={5} pr={5}>
                    How to Create a Homepage That Drives Clicks
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Explore;
