import React, { useEffect, useRef } from "react";
import VideoP from "./videopl.mp4";
import {
  Box,
  Stack,
  Container,
  Text,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import "./Product.style.css";

const VideoPlayer = () => {
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
    <Box
      backgroundColor="white"
      w="100%"
    >
      <Container as={Stack} maxW={"6xl"}>
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
              >
                Customize your new website layout
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
                CyberDomain's website builder has pre-built, professional
                layouts for every section, so you can quickly change the
                structure of your site as much as you like without any coding
                knowledge.
              </Text>
            </Box>
            <Center>
              <Box
                w="190px"
                h="50px"
                borderRadius="50px"
                bg="black"
                margin="auto"
                mt="0px"
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
                  Start refining
                </Button>
              </Box>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default VideoPlayer;
