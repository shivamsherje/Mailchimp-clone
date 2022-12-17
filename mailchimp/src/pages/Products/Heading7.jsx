import { Box, Text, Container, Center, Stack, Button } from "@chakra-ui/react";
import React from "react";

const Heading7 = () => {
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
              Ready to start building your new site?
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
              Launch your website right away.
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
                  className="btn-strtB"
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
                  Start Building For Free
                </Button>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default Heading7;
