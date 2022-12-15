import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import "./TopSection.css";
const TopSections = () => {
  return (
    <Box w="100%" height="auto" pt="30">
      <Box
        w="90%"
        height="auto"
        margin="auto"
        mb={{ base: "18px", md: "30px", lg: "60px" }}
      >
        <Heading
          fontWeight="medium"
          className="heading-of-homepage"
          margin="auto"
          w="60%"
          textAlign="center"
          fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
        >
          Turn Emails into Revenue
        </Heading>

        <Text
          className="paragraph-of-top-section"
          margin="auto"
          fontWeight={400}
          mt={{ base: "16px", md: "18px", lg: "25px" }}
          w="62%"
          
          textAlign="center"
          lineHeight={1.8}
        >
          Win new customers with the #1 email marketing and automations brand*
          that recomends ways to get more opens, clicks and sales.
        </Text>

        <Box
          w="120px"
          h="50px"
          borderRadius="50px"
          bg="black"
          margin="auto"
          mt="30px"
        >
          <Button
            className="btn-signup"
            w="100%"
            h="50px"
            fontSize="16px"
            borderRadius="50px"
            background="#ffe01b"
            border="1px solid black"
            pos="-moz-initial"
            fontWeight="bold"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSections;
