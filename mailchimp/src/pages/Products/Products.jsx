import { Button, Center, Container, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import Decide from "./Decide";
import Explore from "./Explore";
import Faq from "./Faq";
import Head3 from "./Head3";
import Heading4 from "./Heading4";
import Heading5 from "./Heading5";
import Heading6 from "./Heading6";
import Heading7 from "./Heading7";
import Image2 from "./Image2";
import "./Product.style.css";
import ProductImage from "./ProductImage";
import ProductImage2 from "./ProductImage2";
import ProductImage3 from "./ProductImage3";
import Promote from "./Promote";
import Promote2 from "./Promote2";
import { SellProduct } from "./SellProduct";
import { SellProduct1 } from "./SellProduct1";
import { Unsplash } from "./Unsplash";
import VideoPlayer from "./VideoPlayer";
import WebLayout from "./WebLayout";
import {Link} from "react-router-dom"

const Products = () => {
  return (
    <Box backgroundColor="#ffe6ff" w="100%" pt={10}>
      <Container as={Stack} maxW={"2xl"} pt={20} pb={16}>
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
              search engine ready all on your own with the power of
              CyberDomain’s platform.
            </Text>
            <Center>
              <Box
                w="250px"
                h="50px"
                borderRadius="50px"
                bg="black"
                margin="auto"
                mt="30px"
              >
              <Link to={"/UserProducts"}>
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
                </Link>
              </Box>
            </Center>
          </Stack>
        </Center>
      </Container>
      <ProductImage />
      <Head3 />
      <Image2 />
      <WebLayout />
      <VideoPlayer />
      <Unsplash />
      <Heading4 />
      <SellProduct />
      <SellProduct1 />
      <Promote />
      <Promote2 />
      <ProductImage2 />
      <Heading5 />
      <ProductImage3 />
      <Heading6 />
      <Decide />
      <Explore />
      <Faq />
      <Heading7 />
    </Box>
  );
};

export default Products;
