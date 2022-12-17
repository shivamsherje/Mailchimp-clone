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
import "./OnlineStores.style.css";

const About = () => {
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
                mt={"50"}
                mb={"50"}
              >
                Want to learn more about starting an online store?
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
                    How to start an e-commerce business
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"black"}>
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2} mb={1}>
                  <Text pl={5} pr={5}>
                    How to start an online store
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"black"}>
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2} mb={1}>
                  <Text pl={5} pr={5}>
                    E-commerce website design tips
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"black"}>
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2}>
                  <Text pl={5} pr={5}>
                    How to sell a product online
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"black"}>
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2}>
                  <Text pl={5} pr={5}>
                    How to sell to any audience
                  </Text>
                  <Center>
                    <ArrowForwardIcon className="arrowr" />
                  </Center>
                </Flex>
              </Center>
            </Box>
            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"black"}>
              <Center>
                <Flex className="exptxt" gap={"15px"} mt={2}>
                  <Text pl={5} pr={5}>
                    How to start a business
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

export default About;
