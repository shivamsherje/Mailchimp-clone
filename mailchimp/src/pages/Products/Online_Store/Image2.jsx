import {
  Box,
  Stack,
  Container,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "./OnlineStores.style.css";

const Image2 = () => {
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
              src="https://eep.io/images/yzco4xsimv0y/6IkjIA6iI2sAngO8CNq73h/5ce493bc5cce74bd6facea7ec1448836/21_AUI_Stores-Feature-Page_Built-In-Marketing__1_-min.png?w=1520&fm=webp&q=80"
              alt="Logo3"
              height={[150, 300, 600]}
              w={[200, 400, 600]}
            />
          </Box>
          <Stack
            direction="column"
            py={4}
            mt={{ md: "20%", sm: "0", base: "0" }}
          >
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
                textAlign={"left"}
              >
                Sell more with built-in marketing
              </Text>
            </Box>
            <Box pb={{ base: "0", sm: "20px", md: "50px" }}>
              <Text
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="1em"
                lineHeingt="1.5"
                color="#241c15"
                fontWeight="400"
                textAlign={"left"}
              >
                Your online store comes with powerful marketing features like
                digital ads and social posting to help you find a bigger
                audience and drive traffic. Once visitors land on your site,
                built-in abandoned cart emails convert shoppers into customers.
                Then use email and automations to get repeat business and let
                customers know what's happening with your business—like when you
                launch a new product.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Image2;
