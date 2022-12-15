import React from 'react'
import { Box, Flex, Text, Divider, Image } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

function TopSection() {
  return (
    <Flex
      textAlign={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      pt={"150px"}
      h={"663px"}
      bgColor={"#fbeeca"}>
      <Flex fontSize={"13px"} alignItems={"center"}>
        <a href="https://mailchimp.com/resources/prep-and-start/">
          <Text textDecoration={"underline"} mr={6}>
            PREP & START
          </Text>
        </a>
        <IoIosArrowForward />
        <a href="https://mailchimp.com/resources/tools-marketing/">
          <Text textDecoration={"underline"} ml={6}>
            MARKETING TOOLS
          </Text>
        </a>
      </Flex>
      <Text mt={6} fontSize={"5xl"}>
        How to Use Mailchimp
      </Text>
      <Text mt={6} fontSize={"xl"} w={"50%"}>
        New to Mailchimp and not sure where to start? We’ll walk you through the
        basic uses so you know what to expect along the way.
      </Text>
      <Box position={"relative"} bottom="-70px">
        <Image
          w={"650px"}
          src="https://eep.io/images/yzco4xsimv0y/7iWWJJfPlrJ8vMLmRSyb2r/0c3a8892d02b7007cc477aebe68e9de1/tour.png?w=1560&fm=webp&q=70"
        />
      </Box>
    </Flex>
  );
}

export default TopSection