import { Box, Text, Container, Center, Stack, Button } from "@chakra-ui/react";
import React from "react";
import "./OnlineStores.style.css";

const HeadingLast = () => {
  return (
    <Box backgroundColor="#ffe01b" w="100%">
      <Container as={Stack} maxW={"4xl"} pt={28} pb={28}>
        <Center>
          <Stack dir="column">
            <Text
              fontWeight="300"
              fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
              fontSize="2.5rem"
              lineHeight={1}
              color="#241c15"
              letterSpacing="-.03125rem"
            >
              Ready to start selling?
            </Text>
            <Text
              letterSpacing="0"
              lineHeight={1.2}
              fontSize="1.25rem"
              fontWeight="400"
              color="#241c15"
              pt={5}
              pb={5}
            >
              It’s free to create and publish an online store - you only pay
              when you make a sale!
            </Text>
            <Center>
              <Box
                w="226px"
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
                  Sign Up Free
                </Button>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default HeadingLast;
