import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <Box>
      <Box py={"70px"} px={"5%"} bgColor={"#241b15"}>
        <Grid templateColumns={"35% 55%"} gap={"10%"}>
          <GridItem textAlign={"left"}>
            <Flex textAlign={"left"} flexDirection={"column"} justifyContent={"center"} h={"100%"}>
              <Image
                w={"90%"}
                src="https://images.ctfassets.net/3eti6ketg4ch/1z55OclXaN7Y6NImJvCEr0/9c0cbffcb8579ec95e3fcbf3eb31d852/06_Homepage_HeroLogo.png"
              />
              <Text mt={8} color={"white"}>
                Join 5 documentarians who leave nothing to guess about as they
                dive into the worlds of photography and film, fireworks, cave
                drawings, and bugs. Reward your curiosity with inspiration to
                ask your own questions, or just immerse yourself into their
                worlds.
              </Text>
              <Button fontSize={"xs"} mt={6} w={"max-content"} color={"white"} variant={"link"}>WATCH NOW</Button>
            </Flex>
          </GridItem>
          <GridItem>
            <Image src="https://images.ctfassets.net/3eti6ketg4ch/6EO1Cycwwu6o8i3iuGvbJb/e12843585079fef0e8f474d82c34994a/05_Homepage_HeroImage-min.png" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner;
