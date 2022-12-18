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

function AdminProducts() {
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
      toast({
        title: "Website created.",
        description: "We've created your Website for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchCitiesDataAndUpdate(page, limit, srt));
  };

  return (
    <Box
      backgroundColor="#0093E9"
      backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
      w="100%"
      color={"white"}
    >
      <Center>
        <Text as="u" fontSize="4xl">
          Manage Users
        </Text>
      </Center>
      <AddProduct onAddProduct={handleProduct} />
      <Center>
        <Flex pt={5} gap={"20px"}>
          <Box>
            <Flex mb="20px">
              <Text fontWeight={"bold"} mb="5px" w={"200px"}>
                Page Limit:
              </Text>
              <Select
                placeholder="Select option"
                onChange={(e) => setLimit(e.target.value)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Select>
            </Flex>
          </Box>
          <Box>
            <Flex mb="20px">
              <Text fontWeight={"bold"} mb="5px">
                Sort:
              </Text>
              <Select
                placeholder="Select option"
                onChange={(e) => setSrt(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Decending</option>
              </Select>
            </Flex>
          </Box>
        </Flex>
      </Center>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"white"}>ID</Th>
              <Th color={"white"}>Title</Th>
              <Th color={"white"}>Category</Th>
              <Th color={"white"}>Pricing</Th>
              <Th color={"white"}>Image</Th>
              <Th color={"white"}>Description</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                <Td>{item.id}</Td>
                <Td isNumeric>{item.title}</Td>
                <Td isNumeric>{item.category}</Td>
                <Td>{item.pricing}</Td>
                <Td>
                  <Image width={[100, 200, 400]} src={item.image} />
                </Td>
                <Td>
                  <Text noOfLines={[1, 2, 3]}>{item.desc}</Text>
                </Td>
                <Td>
                  <Button
                    bg={"black"}
                    _hover={{
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Center gap={5} mt="20px" pb="20px">
        <Button
          bg={"black"}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>
        <Button bg={"black"}>{page}</Button>
        <Button bg={"black"} onClick={() => setPage(page + 1)}>
          NEXT
        </Button>
      </Center>
    </Box>
  );
}

export default AdminProducts;
