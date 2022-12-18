import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Checkbox,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useState } from "react";

import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import AddProduct from "./AddProduct";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  // console.log('email:', typeof(email))
  const [password, setPassword] = useState("");
  // console.log('password:', password)
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8080/admin")
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        res.map((el) => {
          console.log(typeof el.email);
          if (el.email === email && el.password === password) {
            navigate("/AdminProducts");
            console.log("success");
          } else {
            alert("You are not a admin");
          }
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      // backgroundImage="url('https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg')"
      backgroundColor="#FFFF5C"
    >
      <Stack spacing={8} mx={"auto"} maxW={"8xl"} py={12} px={6}>
        <Center>
          <Box>
            <Text
              fontSize="6xl"
              color="#007500"
              fontWeight="extrabold"
              _hover={{
                cursor: "pointer",
                color: "#00A300",
              }}
              fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
            >
              <Text fontSize={"5xl"}>Admin Panel Login</Text>
            </Text>
          </Box>
        </Center>
        {/* <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to go to Admin Panel ✌️
          </Text>
        </Stack> */}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          backgroundColor="#000"
          color={"white"}
          w={"2xl"}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email" isRequired >
                <FormLabel color={"white"} fontSize={"2xl"}>
                  Email address
                </FormLabel>
                <Input
                  p={7}
                  type="email"
                  placeholder="email"
                  color={"grey"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"white"} fontSize={"2xl"}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    p={7}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    color={"grey"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <br />
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  disabled={loading}
                  type="submit"
                  fontSize={"2xl"}
                  pt={6}
                  pb={6}
                >
                  Sign in
                </Button>
                <Stack pt={2}>
                  <Text align={"center"}>
                    Go To User Login!{" "}
                    <Link href="#" color={"blue.400"}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
