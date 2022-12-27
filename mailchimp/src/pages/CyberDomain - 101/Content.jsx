import React, { useState } from 'react'
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
import Campaign from './Campaign';
import "./Content.css"

function Content() {

  const [campaign, setCampaign] = useState(1)

  const handleCampaign = (value) => {
    setCampaign(value)
    console.log(value)
  }

  return (
    <Box mt={"400px"} textAlign={"left"}>
      <Grid
        m={"auto"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}>
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
            <Box mt={8} className="btn-shadow">
              <Button
                colorScheme={"white"}
                className="btn-hover-an"
                bgColor={"white"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"20px"}
                fontSize={"sm"}
                p={"22px"}>
                Get started
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
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
        <Grid
          m={"auto"}
          w={"70%"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap={6}>
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
                <Box mt={8} mr={2} className="btn-shadow">
                  <Button
                    colorScheme={"white"}
                    className="btn-hover-an"
                    bgColor={"#fee017"}
                    color={"black"}
                    border={"1px solid black"}
                    borderRadius={"20px"}
                    fontSize={"sm"}
                    p={"22px"}>
                    Create a Landing Page
                  </Button>
                </Box>
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
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={"30px"}>
        <GridItem>
          <Text fontSize={"3xl"} mb={8}>
            Create your first email campaign
          </Text>
          <Accordion defaultIndex={0}>
            <AccordionItem py={"15px"} onClick={() => handleCampaign(1)}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={"2xl"}>Pick your template</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We have templates for all types of messages—pick one based on
                your goal or a look you’re going for.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py={"15px"} onClick={() => handleCampaign(2)}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={"2xl"}>Add your content</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can see all your updates in real time so it’s easy to see
                how it’s coming together.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py={"15px"} onClick={() => handleCampaign(3)}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={"2xl"}>Choose who gets it</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Once you’re happy with your email, you choose who it will go
                to—whether that’s all your subscribers or one small segment.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py={"15px"} onClick={() => handleCampaign(4)}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={"2xl"}>Hit send</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                This is the moment of truth. Not to worry, we’ll make sure
                everything’s good to go on our end before we send it out the
                door.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
        <GridItem>{<Campaign value={campaign} />}</GridItem>
      </Grid>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={"30px"}>
        <GridItem>
          <Flex
            px={"20px"}
            h={"100%"}
            textAlign={"left"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Text fontSize={"3xl"}>
              Want to learn more about email? It’s kind of our speciality.
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
                        Email Design Guide
                      </Text>
                      <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                        <BsArrowRightShort color="black" size={"25px"} />
                      </Box>
                    </Flex>
                  </a>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Tips for Your First Campaign
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Email Marketing Field Guide
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Insipiration Gallery
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

      <Grid
        mt={"130px"}
        templateColumns={{
          base: "30% 70%",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "30% 70%",
          xl: "30% 70%",
        }}>
        <GridItem>
          <Box p={12} bgColor={"#f25f26"}>
            <Image
              w={""}
              src="https://eep.io/images/yzco4xsimv0y/66n1FijXPUSXG4qwuIR70g/b8c476608a1c4d0095b0e69e4a693634/Chefkiss_b_w.png?w=1520&fm=webp&q=80"
            />
          </Box>
        </GridItem>
        <GridItem>
          <Flex
            px={"150px"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            bgColor={"#fee017"}>
            <Text my={12} fontSize={"4xl"}>
              Nice work. Once you've sent your first email campaign, you're
              officially part of the club.
            </Text>
          </Flex>
        </GridItem>
      </Grid>

      {/*  */}

      <Text
        w={"45%"}
        m={"auto"}
        mt={"130px"}
        textAlign={"center"}
        fontSize={"4xl"}>
        Next up? Curate a path to take customers from prospect to purchase.
      </Text>

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}>
        <GridItem>
          <Image
            width={"85%"}
            src="https://eep.io/images/yzco4xsimv0y/4wc0Paqy3g3DeZU2wdssbg/6cf59cb9ab99f0b689eb22b452390a4c/CustomerJourneys.png?w=1080&fm=webp&q=80"
          />
        </GridItem>
        <GridItem>
          <Box>
            <Heading>
              Design automated journeys to guide your customer’s experience
            </Heading>
            <Text fontSize={"xl"} mt={6}>
              With Customer Journey builder, deliver relevant messages to your
              customers based on how they engage with your business. Design and
              automate a customized path for your customer that turns window
              shoppers into lifelong customers.
            </Text>
            <Box mt={8} className="btn-shadow">
              <Button
                colorScheme={"white"}
                className="btn-hover-an"
                bgColor={"white"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"20px"}
                fontSize={"sm"}
                p={"22px"}>
                See what's possible
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={"30px"}>
        <GridItem>
          <Flex
            px={"20px"}
            h={"100%"}
            textAlign={"left"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Text fontSize={"3xl"}>
              New to marketing automation? We’ve got you covered.
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
                        About Customer Journeys
                      </Text>
                      <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                        <BsArrowRightShort color="black" size={"25px"} />
                      </Box>
                    </Flex>
                  </a>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Create a Customer Journey
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      All the Starting Points
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

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}>
        <GridItem>
          <Box>
            <Heading>Unlock even more Mailchimp features</Heading>
            <Text fontSize={"xl"} mt={6}>
              You get more from Mailchimp when you connect other tools or
              services, like your online store. Find your integrations in our
              directory, connect in a few steps, and unlock new features, just
              like that.
            </Text>
            <Box mt={8} className="btn-shadow">
              <Button
                colorScheme={"white"}
                className="btn-hover-an"
                bgColor={"white"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"20px"}
                fontSize={"sm"}
                p={"22px"}>
                Explore the directory
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Image
            width={"85%"}
            src="https://eep.io/images/yzco4xsimv0y/6cdYuRb3m8DVYBRVE2YLVI/e38ea9ff3d169ae69148e8e0fefee7ec/ILLO_Key_Transparent.png?w=1520&fm=webp&q=80"
          />
        </GridItem>
      </Grid>

      {/*  */}

      <Grid
        m={"auto"}
        mt={"130px"}
        w={"70%"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={"30px"}>
        <GridItem>
          <Flex
            px={"20px"}
            h={"100%"}
            textAlign={"left"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Text fontSize={"3xl"}>
              Still curious about integrations? We’ve got you.
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
                        About Connecting Your Site
                      </Text>
                      <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                        <BsArrowRightShort color="black" size={"25px"} />
                      </Box>
                    </Flex>
                  </a>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Sell More Stuff With Cyber Domain
                    </Text>
                    <Box borderRadius={"50%"} bgColor={"#fee00f"}>
                      <BsArrowRightShort color="black" size={"25px"} />
                    </Box>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Connect Google Analytics
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

      <Box m={"auto"} mt={"130px"} w={"70%"}>
        <Text w={"50%"} mb={"70px"} fontSize={"4xl"}>
          Here’s how you step up your game even more
        </Text>
        <Accordion defaultIndex={0}>
          <AccordionItem py={"15px"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"2xl"}>Learning from your campaigns</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text w={"60%"}>
                Mailchimp has built-in analytics so you can see who’s opening
                your emails, the kind of content they’re clicking on, and what’s
                working best to get smarter with what you send.
              </Text>
              <Button
                fontSize={"xs"}
                mt={6}
                textDecoration={"underline"}
                color={"black"}
                variant={"link"}>
                See how it works
              </Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={"15px"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"2xl"}>
                    Test your emails to see what works
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text w={"60%"}>
                Now that you’ve got the hang of this stuff, you can get even
                smarter with your marketing. Mailchimp makes it easy to set up
                A/B tests: one group gets Email A, one group gets Email B, and
                you see which performs better so you can adjust accordingly.
              </Text>
              <Button
                fontSize={"xs"}
                mt={6}
                textDecoration={"underline"}
                color={"black"}
                variant={"link"}>
                Set up a test
              </Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={"15px"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"2xl"}>Segmenting your audience</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text w={"60%"}>
                When you target segments of your audience based on shared
                characteristics, you can personalize your messages, find new
                ideas for campaigns, and see better ROI. We make it easy to get
                started with pre-built segments you can target in just a few
                clicks.
              </Text>
              <Button
                fontSize={"xs"}
                mt={6}
                textDecoration={"underline"}
                color={"black"}
                variant={"link"}>
                Explore segmentation
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/*  */}

      <Grid
        w={"50%"}
        m={"auto"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        mt={"130px"}>
        <GridItem>
          <Image
            w={"80%"}
            src="https://eep.io/images/yzco4xsimv0y/5C4St15tsmVj3DRu4pCDJ9/5d9ce3c10810d02d4db4d8b2efa81faf/Mailchimp-101.png?w=560&fm=webp&q=80"
          />
        </GridItem>
        <GridItem>
          <Flex flexDirection={"column"} h={"100%"} justifyContent={"center"}>
            <Text fontSize={"4xl"}>Success is yours</Text>
            <Text mt={6}>
              You’re ready to dive in to your Mailchimp account. And remember,
              you can always explore our{" "}
              <a href="https://mailchimp.com/help/">
                <Text as={"b"}>guides and tutorials</Text>
              </a>{" "}
              when you need a little help along the way.
            </Text>
          </Flex>
        </GridItem>
      </Grid>

      {/*  */}

      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        mt={"130px"}
        py={"110px"}
        textAlign={"center"}
        bgColor={"#fee017"}>
        <Text mb={2} fontSize={"5xl"}>
          It's easy to get started
        </Text>
        <Text fontSize={"2xl"}>And it's free. Two things everyone loves.</Text>
        <Box mt={8} className="btn-shadow">
          <Button
            colorScheme={"white"}
            className="btn-hover-an"
            bgColor={"#fee017"}
            color={"black"}
            border={"1px solid black"}
            borderRadius={"20px"}
            fontSize={"sm"}
            p={"22px"}>
            Sign up
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Content