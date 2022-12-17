import {
  Box,
  Stack,
  Container,
  Image,
  Text,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import "./OnlineStores.style.css";

const Image3 = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={10} pb={16}>
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
                textAlign={"left"}
              >
                Keep growing with paid marketing features
              </Text>
            </Box>
            <Box pt={8}>
              <Accordion allowToggle borderColor={"black"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                        Customer Journeys
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack direction={"column"}>
                      <Text textAlign={"left"}>
                        Drive sales—and repeat business—by creating flexible
                        automations that send customers the right message at the
                        right time.
                      </Text>
                      <Text
                        textDecor={"underline"}
                        textAlign={"left"}
                        fontWeight="bold"
                        _hover={{ cursor: "pointer", color: "#EEA800" }}
                      >
                        About Customer Journeys
                      </Text>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                        Creative Assistant
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack direction={"column"}>
                      <Text textAlign={"left"}>
                        With the click of a button, use your store’s URL to
                        generate on‑brand multichannel designs that you can
                        download to use on channels like social media.
                      </Text>
                      <Text
                        textDecor={"underline"}
                        textAlign={"left"}
                        fontWeight="bold"
                        _hover={{ cursor: "pointer", color: "#EEA800" }}
                      >
                        About Creative Assistant
                      </Text>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                        Social post scheduling
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack direction={"column"}>
                      <Text textAlign={"left"}>
                        Schedule posts ahead of time on Facebook, Twitter, and
                        Instagram. And if plans change, you can pause, edit, or
                        reschedule anytime.
                      </Text>
                      <Text
                        textDecor={"underline"}
                        textAlign={"left"}
                        fontWeight="bold"
                        _hover={{ cursor: "pointer", color: "#EEA800" }}
                      >
                        About social post scheduling
                      </Text>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Stack>
          <Box
            m={{ sm: "auto", base: "auto" }}
            mb={{ sm: "0px" }}
            justify={{ sm: "center", base: "center" }}
          >
            <Image
              className="imgp"
              src="https://eep.io/images/yzco4xsimv0y/1nQR9lEHrDzLPUtP3AWulS/0b750dc9dcb9f94844833390b5de3912/16_AUI_Stores-Feature-Page_Step1_Customer-Journey-min.png?w=1520&fm=webp&q=80"
              alt="Logo3"
              height={[150, 300, 600]}
              w={[200, 400, 600]}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Image3;
