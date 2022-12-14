import React from "react";
import video from "../../assets/video.mp4";
import VideoPlayer from "react-video-js-player";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import "./video.css"
import videoposter from "../../assets/videoposter.webp";
const Video = () => {
  const videosrc = video;
  const posters = videoposter;
  return (
    <Box bg="#241c15" pt="20" pb="20" margin="auto" className="videoplayer">
      <VideoPlayer className="video1"  src={videosrc} width="1200px" height="675px" poster={posters}/>
      <Text pt="20" className="videotext" color="white">
        Most email marketing platforms tell you how your campaigns perform. We
        analyze the data from the billions of emails we send to give you
        personalized recommendations for improving your content, targeting, and
        automations.
      </Text>
    </Box>
  );
};

export default Video;
