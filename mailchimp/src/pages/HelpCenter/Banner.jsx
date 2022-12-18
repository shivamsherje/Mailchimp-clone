import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from 'react'

function Banner() {
  return (
    <Box pt={"80px"}>
      <Box py={"70px"} px={"15%"} bgColor={"#fbeeca"}>
        <Grid templateColumns={"repeat(2, 1fr)"}>
          <GridItem textAlign={"left"}>
            <Flex flexDirection={"column"} justifyContent={"center"} h={"100%"}>
              <Text mb={6} fontSize={"3xl"}>
                Know More, Do More with Mailchimp
              </Text>
              <Text>
                Get the most out of Mailchimp with our step-by-step videos and
                tutorials. Browse by topic or search by feature for 24/7 help
                with any stage of your business journey.
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Image src="https://eep.io/images/yzco4xsimv0y/2acL1QmHnWiQc0mYwYKi0C/dd5586458792da808d3376b4846a787a/guides-tutorials.png?w=1520&fm=webp&q=70" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner