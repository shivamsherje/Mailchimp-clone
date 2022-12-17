import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import "./OnlineStores.style.css";
import OpVideo from "./OpVideo";
import FlexHead from "./FlexHead";
import Heading1 from "./Heading1";
import Quickly from "./Quickly";
import Image1 from "./Image1";
import Image2 from "./Image2";
import MoreWays from "./MoreWays";
import Image3 from "./Image3";
import About from "./About";
import Faq from "./Faq";
import HeadingLast from "./HeadingLast";
import BelowLinks from "./BelowLinks";

const OnlineStores = () => {
  return (
    <Box backgroundColor="#c5dbf2" w="100%">
      <Container as={Stack} maxW={"4xl"} pt={4} pb={11}>
        <Center>
          <Stack direction="column" spacing={4}>
            <Center>
              <Box mt={"7.5rem"} mb={"7.5rem"} w="85%">
                <Center>
                  <Box mb={5}>
                    <Flex gap={4}>
                      <Text
                        textTransform={"uppercase"}
                        color="#241c15"
                        fontFamily={
                          "Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                        }
                        fontSize="0.875rem"
                        fontWeight={500}
                        lineHeight={1.25}
                        letterSpacing={0}
                      >
                        ONLINE STORE
                      </Text>
                      <Text
                        bg="#ff3ebf"
                        borderRadius="20"
                        style={{ cursor: "text" }}
                        pt="0.0625rem"
                        pb="0.0625rem"
                        pr={"0.4375rem"}
                        pl={"0.4375rem"}
                        fontSize="0.875rem"
                        lineHeight="1.25"
                        fontWeight={400}
                        letterSpacing={0}
                      >
                        New
                      </Text>
                    </Flex>
                  </Box>
                </Center>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="2.5rem"
                  lineHeight={1}
                  color="#241c15"
                  letterSpacing="-.03125rem"
                >
                  Start selling online
                </Text>
                <Box mt="2rem">
                  <Text
                    fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                    fontSize="1em"
                    lineHeingt="1.5"
                    color="#241c15"
                    fontWeight="400"
                  >
                    Don’t just launch your Mailchimp online store—reach
                    customers and drive sales with built-in marketing tools.
                  </Text>
                </Box>
                <Box>
                  <Center>
                    <Flex>
                      <Box
                        w="100px"
                        h="50px"
                        borderRadius="50px"
                        bg="black"
                        margin="auto"
                        mt="30px"
                      >
                        <Button
                          className="btn-strtOS"
                          w="100%"
                          h="50px"
                          fontSize="16px"
                          borderRadius="50px"
                          background="#ffe01b"
                          backgroundColor="#ffe01b"
                          border="1px solid black"
                          pos="-moz-initial"
                          fontWeight="bold"
                        >
                          Sign Up
                        </Button>
                      </Box>
                      <Box w="150px" h="50px" margin="auto" mt="30px" pt={3}>
                        <Text
                          _hover={{
                            color: "#ffe01b",
                            cursor: "pointer",
                          }}
                          textDecor={"underline"}
                        >
                          See Pricing Plans
                        </Text>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
                <Box mt={[4,6,8]}>
                  <Center>
                    <Text
                      fontFamily={
                        "Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                      }
                      fontSize="0.8125rem"
                      lineHeight={1.25}
                      color="rgba(36,28,21,0.65)"
                      fontWeight={400}
                    >
                      *Websites & Commerce plans include access to stores. If
                      you publish a store, you will be charged non-refundable
                      transaction fees on a per-transaction basis based on the
                      total order value (+ tax & shipping). Stripe payment
                      processing fees also apply.
                    </Text>
                  </Center>
                </Box>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
      <OpVideo />
      <FlexHead />
      <Heading1 />
      <Quickly />
      <Image1 />
      <Image2 />
      <MoreWays />
      <Image3 />
      <About />
      <Faq />
      <HeadingLast />
      <BelowLinks />
    </Box>
  );
};

export default OnlineStores;
