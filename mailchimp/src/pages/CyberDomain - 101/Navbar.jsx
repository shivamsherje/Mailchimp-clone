import React from 'react'
import { Flex, Text, Divider } from "@chakra-ui/react"

function Navbar() {
    return (
        <Flex position={"sticky"} justifyContent={"center"} py={4}>
          <Text fontSize={"20.7024px"}>Marketing Library</Text>
          <Divider orientation="vertical" />
        </Flex>
    );
}

export default Navbar