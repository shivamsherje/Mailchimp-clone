import React from 'react'
import {
  Image,
  Text,
  Box,
  Heading,
  Grid,
  GridItem,
  Button,
  Flex,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

function Content() {
  return (
    <Box mt={"400px"} textAlign={"left"}>
      <Grid m={"auto"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem>
          <Image
            width={"85%"}
            src="https://eep.io/images/yzco4xsimv0y/4YrseyUbDGeZp5Mp1zQXs/a5639d145d8acfdd57a62c25a6448df7/audience_b_w.png?w=1080&fm=webp&q=80"
          />
        </GridItem>
        <GridItem>
          <Box>
            <Heading>Let’s start building your audience</Heading>
            <Text fontSize={"xl"} mt={6}>
              Just by bringing all your contact data into Mailchimp, we can
              start to show you helpful insights about your audience. We’ll help
              you find new ways to talk to people who love your brand—and new
              ways to reach people who are likely to.
              <br />
              <br />
              Even if you don’t have contacts to market to yet, you can always
              log in and start playing around with our design tools. In fact, we
              recommend it.
            </Text>
            <Button
              mt={8}
              bgColor={"transparent"}
              border={"1px solid black"}
              borderRadius={"20px"}
              fontSize={"sm"}
              p={"22px"}>
              Get started
            </Button>
          </Box>
        </GridItem>
      </Grid>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={"repeat(2, 1fr)"}
        gap={"30px"}>
        <GridItem>
          <Flex
            px={"20px"}
            h={"100%"}
            textAlign={"left"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Text fontSize={"3xl"}>
              Want to learn more? Here are a few resources to help.
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Box>
            <Card boxShadow={"none"}>
              <CardBody>
                <Stack
                  divider={<StackDivider borderColor={"black"} />}
                  spacing="2">
                  <a href="https://mailchimp.com/help/getting-started-audience/">
                    <Flex justifyContent={"space-between"} alignItems="center">
                      <Text pt="2" fontSize="sm">
                        Getting Started with Your Audience
                      </Text>
                      <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                        <BsArrowRightShort color="black" size={"25px"} />
                      </Box>
                    </Flex>
                  </a>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Import Contacts to Mailchimp
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Requirements and Best Practices for Audiences
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
      </Grid>

      {/*  */}

      <Box mt={"130px"} bgColor={"#f6f6f4"} p={"100px"}>
        <Grid m={"auto"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
          <GridItem>
            <Image
              width={"85%"}
              src="https://eep.io/images/yzco4xsimv0y/5gCsbWATmomqeQWIcQ66Es/236210839e95e0acb7bfbd3fa870a504/ILLO_Spot_Email_3_1080.png?w=1160&fm=webp&q=80"
            />
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize={"4xl"}>
                No contacts? No <br /> problem.
              </Text>
              <Text fontSize={"xl"} mt={6}>
                Let people sign up for your marketing with a landing page.
              </Text>
              <Flex alignItems={"end"}>
                <Button
                  mt={8}
                  bgColor={"#fee017"}
                  border={"1px solid black"}
                  borderRadius={"20px"}
                  fontSize={"sm"}
                  p={"22px"}>
                  Create A Landing Page
                </Button>
                <a href="https://mailchimp.com/features/landing-pages/">
                  <Text textAlign={"right"} textDecor={"underline"}>
                    Learn More About Landing Pages
                  </Text>
                </a>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={"repeat(2, 1fr)"}
        gap={"30px"}>
        <GridItem>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
        <GridItem>
          <Box>
            <Card boxShadow={"none"}>
              <CardBody>
                <Stack
                  divider={<StackDivider borderColor={"black"} />}
                  spacing="2">
                  <a href="https://mailchimp.com/help/getting-started-audience/">
                    <Flex justifyContent={"space-between"} alignItems="center">
                      <Text pt="2" fontSize="sm">
                        Getting Started with Your Audience
                      </Text>
                      <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                        <BsArrowRightShort color="black" size={"25px"} />
                      </Box>
                    </Flex>
                  </a>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Import Contacts to Mailchimp
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Requirements and Best Practices for Audiences
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Content