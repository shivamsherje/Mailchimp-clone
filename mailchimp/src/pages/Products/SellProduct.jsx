import {
  Box,
  Stack,
  Container,
  Image,
  Text,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import "./Product.style.css";

export const SellProduct = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={10} pb={16}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={{ md: "16", sm: "0", base: "0" }}
        >
          <Box
            m={{ sm: "auto", base: "auto" }}
            mb={{ sm: "0px" }}
            justify={{ sm: "center", base: "center" }}
          >
            <Image
              className="imgp"
              src="https://eep.io/images/yzco4xsimv0y/6WKMdFvtY6GTitMgqwuoyN/36408f9fd4f5bc53fa030e39a6f85aad/AUI_Website-Builder_New-Stores.png?w=1520&fm=webp&q=80"
              alt="Logo4"
              height={[150, 300, 500]}
              w={[200, 400, 600]}
            />
          </Box>

          <Stack
            direction="column"
            py={4}
            mt={{ md: "14%", sm: "0", base: "0" }}
          >
            <Box>
              <Button
                colorScheme="pink"
                _hover={{
                  background: "#ff3ebf",
                  color: "white",
                }}
                borderRadius="20"
                style={{ cursor: "text" }}
              >
                New
              </Button>
            </Box>
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
              >
                Sell online and manage orders
              </Text>
            </Box>
            <Box pb={{ base: "0", sm: "20px", md: "50px" }}>
              <Text
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="1em"
                lineHeingt="1.5"
                color="#241c15"
                fontWeight="400"
              >
                Launch an online e-commerce store from your site for free—you
                only pay when you make a sale. Then use built-in marketing
                features to drive traffic and sales through our integrated
                full-featured platform.
              </Text>
            </Box>
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
                  Start selling
                </Button>
              </Box>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
