import { GridItem, Image, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import "./Card.css"

function Card({poster, logo, tag}) {
  return (
    <GridItem className='gridCard'>
      <Box>
        <Flex className="posterCont">
          <Image className="cardPoster" src={poster} />
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          className="cardLogoCont">
          <Image className="cardLogo" src={logo} />
        </Flex>
        <Image className="cardTag" src={tag} />
          </Box>
          <Box className='gradient' w={"100%"} h={"100%"}>
              
          </Box>
    </GridItem>
  );
}

export default Card