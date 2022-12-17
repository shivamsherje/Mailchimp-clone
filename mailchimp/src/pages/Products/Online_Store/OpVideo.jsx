import { Box, Center } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import VideoP from "../../../assets/videoStore.mp4";

const OpVideo = () => {
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
      style={{
        background: "linear-gradient(180deg, #c5dbf2 50%, white 50%)",
      }}
      w="100%"
      mb={0}
      pb={0}
    >
      <Center>
        <Box height={[150, 400, 800]} w={[200, 500, 800]}>
          <video
            playsInline
            loop
            muted
            controls
            alt="All the devices"
            src={VideoP}
            ref={videoEl}
          />
        </Box>
      </Center>
    </Box>
  );
};

export default OpVideo;
