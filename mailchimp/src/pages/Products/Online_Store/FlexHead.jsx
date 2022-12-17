import React from "react";
import {
  Center,
  Container,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const FlexHead = () => {
  return (
    <Box backgroundColor="white" w="100%" mt={[0, 0, -150]}>
      <Container as={Stack} maxW={"6xl"} pt={5} pb={16}>
        <Center>
          <Stack direction="row" spacing={4}>
            <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} gap={6}>
              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Launch for free
                </Text>

                <Text
                  fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                  fontSize="1em"
                  lineHeingt="1.5"
                  color="#241c15"
                  fontWeight="400"
                  mt="2rem"
                >
                  Create a website with a product catalog at no cost—you only
                  pay when you make a sale.
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Find new customers
                </Text>

                <Text
                  fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                  fontSize="1em"
                  lineHeingt="1.5"
                  color="#241c15"
                  fontWeight="400"
                  mt="2rem"
                >
                  Drive traffic and e-commerce sales with the free, powerful
                  marketing tools that come with your store.
                </Text>
              </Box>

              <Box>
                <Text
                  fontWeight="300"
                  fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
                  fontSize="1.5rem"
                  lineHeight={1.33333333}
                  color="#241c15"
                  letterSpacing="0"
                  _hover={{
                    cursor: "pointer",
                    textDecor: "underline",
                  }}
                >
                  Own your brand
                </Text>

                <Text
                  fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                  fontSize="1em"
                  lineHeingt="1.5"
                  color="#241c15"
                  fontWeight="400"
                  mt="2rem"
                >
                  Create a seamless brand experience across the web with our
                  intuitive design tools.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
};

export default FlexHead;
