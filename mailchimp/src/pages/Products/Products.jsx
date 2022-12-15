import { Button, Center, Container, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import "./Product.style.css";
import ProductImage from "./ProductImage";

const Products = () => {
  return (
    <Box backgroundColor="#ffe6ff" w="100%">
      <Container as={Stack} maxW={"2xl"} pt={10} pb={16}>
        <Center>
          <Stack direction="column" spacing={4}>
            <Text
              textTransform={"uppercase"}
              fontSize=".8125rem"
              fontWeight={"500"}
              lineHeight="1.25"
              letterSpacing={0}
            >
              WEBSITE BUILDER
            </Text>
            <Text
              mt={"1.75rem"}
              fontWeight="300"
              fontFamily={"Means Web,Georgia,Times,Times New Roman,serif"}
              fontSize="2.5rem"
              lineHeight={1}
              color="#241c15"
              letterSpacing="-.03125rem"
            >
              Create a website for free
            </Text>
            <Text
              mt={"1.875rem"}
              fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
              fontSize="1.25rem"
              lineHeingt="1.2"
              color="#241c15"
              letterSpacing="0"
            >
              Design and simplicity are at the core of our website builder.
              Easily create, customize, and promote a stunning website that's
              search engine ready all on your own with the power of Mailchimp’s
              platform.
            </Text>
            <Center>
              <Box
                w="190px"
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
                  Start Building For free
                </Button>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
      <ProductImage />
    </Box>
  );
};

export default Products;
