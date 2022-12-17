import React from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <InputGroup w={"70%"} m="auto" mt={"100px"}>
      <Input placeholder="Search Help Center" />
      <InputRightElement children={<BsSearch />} />
    </InputGroup>
  );
}

export default Search