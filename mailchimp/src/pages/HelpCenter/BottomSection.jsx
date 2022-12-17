import React from 'react'
import {
  Image,
  Text,
  Box,
  Heading,
  Grid,
  GridItem,
    Button,
  Flex
} from "@chakra-ui/react";

function BottomSection() {
  return (
    <Box mt={"100px"} textAlign={"left"}>
      <Grid m={"auto"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem>
          <Flex flexDirection={"column"} justifyContent={"center"} h={"100%"}>
            <Heading>Watch a webinar</Heading>
            <Text fontSize={"lg"} mt={6}>
              Whether you’re just getting started or want to level up your
              marketing strategy, our webinars help set you up for success in
              Mailchimp. Register for a live session or watch recordings
              on-demand.
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
                Watch Now
              </Button>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Image
            width={"80%"}
            src="https://eep.io/images/yzco4xsimv0y/4EZ4VNCFDDUBoyhZK9KdtN/edb5b15b81b20c210adafeb719fc8700/ILLO_MiniSpot_CustomersOnlinev1_JamesDaw_1080x1080.png?w=1520&fm=webp&q=80"
          />
        </GridItem>
      </Grid>

      {/*  */}

      <Grid m={"auto"} mt={"100px"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem>
          <Image
            width={"80%"}
            src="https://eep.io/images/yzco4xsimv0y/6CENZ3uNhuYSmQy4A4IOUc/23fda14ef9434da03bb9367447c37e4a/expert-help.png?w=1520&fm=webp&q=80"
          />
        </GridItem>
        <GridItem>
          <Flex flexDirection={"column"} justifyContent={"center"} h={"100%"}>
            <Heading>Get help from an expert</Heading>
            <Text fontSize={"lg"} mt={6}>
              Need a hand with template design, using Mailchimp's advanced
              features, or general marketing strategy? Use our experts directory
              to find someone who can help you make things happen.
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
                Browse the directory
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>

      {/*  */}

      <Grid m={"auto"} mt={"100px"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem>
          <Flex flexDirection={"column"} justifyContent={"center"} h={"100%"}>
            <Heading>Still have questions?</Heading>
            <Text fontSize={"lg"} mt={6}>
              If you have a question about something that isn't covered here,
              check out our additional resources. And if that doesn't do the
              trick, you can send an inquiry through our contact form.
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
                Contact us
              </Button>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Image
            width={"80%"}
            src="https://eep.io/images/yzco4xsimv0y/4ggb8bfvrOyCiGkwyyKEQ4/237acc9d210ebeb0fd9c55127d457563/signup-pencil.png?w=1520&fm=webp&q=80"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BottomSection