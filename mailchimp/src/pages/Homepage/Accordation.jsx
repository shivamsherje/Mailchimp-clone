import React from "react";
import { useState } from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Mobile from "../../assets/verticalmobile.png";
import Laptop from "../../assets/verticallaptop.png";
import Laptop2 from "../../assets/laptop2.png";
import Mobile2 from "../../assets/mobile2.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import useWindowSize from "./WindowSize";
import "./Accordation.css";

import {
  
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Accordation = () => {
  const [height, width] = useWindowSize();
  const [lap, setLap] = useState(false);

  return (
    <Box w="100%" h="auto" mt="-120px" mb="50px">
      <Box className="mobile">
        <Box
          bg="#e7b75f"
          w="85%"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="lapmob"
        >
          <Text
            alignItems="center"
            fontSize={{ base: "25px", md: "30px", lg: "40px" }}
            lineHeight={1.2}
            fontWeight={500}
          >
            Keep customers ready to buy with engaging content
          </Text>

          <Box mt="50px" color="black">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem
                borderBottom="1px solid black"
                borderTop="1px solid black"
                onClick={() => setLap(!lap)}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                      fontWeight={400}
                    >
                      Content Optimizer
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight={500}
                >
                  Learn how your emails compare to the top-performing campaigns
                  in your industry and get data-driven suggestions for improving
                  your copy, imagery, and layout.
                  <Text className="Learn">
                    Learn more{" "}
                    <ArrowForwardIcon
                      bg="yellow"
                      w="25px"
                      h="25px"
                      borderRadius="50%"
                    />{" "}
                  </Text>
                  {width < 990 ? (
                    <Image
                      src={Mobile2}
                      alt="laptop"
                      width="100%"
                      height="100%"
                      marginTop={10}
                      mb={10}
                    />
                  ) : (
                    ""
                  )}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderBottom="1px solid black"
                onClick={() => setLap(!lap)}
              >
                <Heading>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                      fontWeight={400}
                    >
                      Creative Assistant
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel
                  pb={4}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight={500}
                >
                  Our Creative Assistant will help you stand out by using AI to
                  create custom designs for your brand.
                  <Text className="Learn">
                    Learn more{" "}
                    <ArrowForwardIcon
                      bg="yellow"
                      w="25px"
                      h="25px"
                      borderRadius="50%"
                    />{" "}
                  </Text>
                  {width < 990 ? (
                    <Image
                      src={Laptop2}
                      alt="laptop"
                      width="100%"
                      height="100%"
                      marginTop={10}
                      mb={10}
                    />
                  ) : (
                    ""
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
        {width > 990 ? (
          lap ? (
            <Image src={Laptop} alt="laptop" />
          ) : (
            <Image src={Mobile} alt="mobile" />
          )
        ) : (
          " "
        )}
      </Box>
    </Box>
  );
};

export default Accordation;
