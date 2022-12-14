import { Box } from "@chakra-ui/react";

import React, { useState } from "react";
import Desx1 from "../../assets/Desktop_Card1.webp";
import Desx2 from "../../assets/Desktop_Card2.webp";
import Desx3 from "../../assets/Desktop_Card3.webp";
import Desx4 from "../../assets/Desktop_Card4.webp";
import Gridone from "./Gridone";
import "./Gridcard.css";

let Data = [
  {
    id: 1,
    image: Desx1,
    text: "Send the right message at the right time to convert more customers.",
    heading: "Convert with Automations",
    bg: "#d99536",
  },

  {
    id: 2,
    image: Desx2,
    text: "Get AI-assisted suggestions to help make your content more engaging.",
    heading: "Optimize with Ai & Analytics",
    bg: "#e7b75f",
  },
  {
    id: 3,
    image: Desx3,
    text: "Boost customer loyalty by predicting the right ones to target and more.",
    heading: "Target with Segmentaton",
    bg: "#fdf8ea",
  },
  {
    id: 4,
    image: Desx4,
    text: "Connect more tools, get more data, save time and make better decisions.",
    heading: "Sync with integrations",
    bg: "#ffffff",
  },
];

const Gridcard = () => {
  const [gridData] = useState(Data);

  return (
    <Box className="gridData">
      {gridData.map((el, i) => (
        <Box key={i}>
          {console.log("vbh", el.text)}

          <Gridone
            key={el.id}
            image={el.image}
            text={el.text}
            heading={el.heading}
            bg={el.bg}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Gridcard;
