import React, { useEffect, useRef } from "react";
import VideoP from "../../../assets/videoQuickly.mp4";
import { Box, Stack, Container, Text, SimpleGrid } from "@chakra-ui/react";
import "./OnlineStores.style.css";

const Quickly = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

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
            <video
              className="videopla"
              playsInline
              loop
              muted
              controls
              alt="All the devices"
              src={VideoP}
              ref={videoEl}
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
                Quickly set up and launch your online store
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
                mt={[3, 4, 5]}
              >
                Our intuitive and delightfully simple website builder—plus
                integrated tools like stock photography from Unsplash—make it
                easy to create a stunning online store in minutes. We’ll
                automatically generate a product listings page for your store,
                as well as pages for each product, and SEO tools to make them
                more findable on search engines. And we have popup and sign up
                forms to add website visitors to your marketing list, which
                helps turn them into customers.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Quickly;
