import { Grid, Box, Text, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import presentsData from "./Data"

function Content() {
    const [data, setData] = useState(presentsData)
    const [filter, setFilter] = useState("All Shows")

    const handleFilter = value => {
        setFilter(value)
    }

    useEffect(() => {
        handleData()
    }, [filter])
    
    const handleData = () => {
        if (filter === "Watch") {
            let filtered = presentsData.filter((data) => {
                return data.alt === "movie"
            })
            setData(filtered)
        }
        if (filter === "Listen") {
          let filtered = presentsData.filter((data) => {
            return data.alt === "podcast";
          });
          setData(filtered);
        }
        if (filter === "All Shows") {
          setData(presentsData);
        }
    }

  return (
    <Box mb={"80px"} mt={"100px"}>
      <Box mb={"100px"}>
        <Text fontSize={"3xl"}>{filter}</Text>
        <Flex justifyContent={"center"} gap={4} mt={3}>
          <Button variant={"link"} color={"gray.600"} fontSize={"xs"} onClick={()=>handleFilter("All Shows")}>ALL</Button>
          <Button variant={"link"} color={"gray.600"} fontSize={"xs"} onClick={()=>handleFilter("Watch")}>WATCH</Button>
          <Button variant={"link"} color={"gray.600"} fontSize={"xs"} onClick={()=>handleFilter("Listen")}>LISTEN</Button>
        </Flex>
      </Box>
      <Grid px={"5%"} gridTemplateColumns={"repeat(4, 1fr)"} gap={6}>
        {data.map((ele) => {
          return <Card poster={ele.poster} logo={ele.logo} tag={ele.tag} />;
        })}
      </Grid>
    </Box>
  );
}

export default Content