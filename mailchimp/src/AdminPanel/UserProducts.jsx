import { useState, useEffect } from "react";
import { getProducts, addProduct, deleteProduct } from "./api";
import AddProduct from "./AddProduct";
import { Center, Text } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Image,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function UserProducts() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [srt, setSrt] = useState("asc");

  const fetchCitiesDataAndUpdate = (page, limit, srt) => {
    getProducts({ page, limit: `${limit}`, sort: "id", order: `${srt}` })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page, limit, srt);
  }, [page, limit, srt]);

  const handleProduct = (data) => {
    // make a post request call
    addProduct(data).then(() => {
      fetchCitiesDataAndUpdate(page, limit, srt);
      // toast({
      //   title: "Website created.",
      //   description: "We've created your Website for you.",
      //   status: "success",
      //   duration: 9000,
      //   isClosable: true,
      // });
    });
  };

  // const handleDelete = (id) => {
  //   deleteProduct(id).then(() => fetchCitiesDataAndUpdate(page, limit, srt));
  // };

  return (
    <Box
      backgroundColor="#0093E9"
      backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
      w="100%"
      color={"white"}
    >
     
      <AddProduct onAddProduct={handleProduct} />
      
    </Box>
  );
}

export default UserProducts;
