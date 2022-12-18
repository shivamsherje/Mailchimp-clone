import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./SignupPage.css";
import flowerpot from "../../assets/flowerpot.png";
import onlyLogo from "../../assets/Onlylogo.png";
import showe from "../../assets/show.png";
import hide from "../../assets/hide.png";
import {Link} from 'react-router-dom'
const SignupPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    email,
    username,
    password,
  };
  return (
    <div>
      <Flex>
        <Box
          justifyContent={"center"}
          textAlign="left"
          padding={5}
          className="mainBox"
          w="75%"
          h="153vh"
          bgColor="white"
        >
            <Link to="/"></Link>
          <Image src={onlyLogo} w={20} />
          <Box w="70%" ml="18%">
            <Heading mt="10%">Sign up for CyberDomain</Heading>
            <Text mt={5}>
              Create a free account or
              <span className="spanHeading">log in</span>{" "}
            </Text>
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  mb={5}
                  size="lg"
                  variant="outline"
                  focusBorderColor="blue.500"
                  placeholder="First name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  mb={5}
                  size="lg"
                  variant="outline"
                  focusBorderColor="blue.500"
                  placeholder="First name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    size="lg"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      mt={1}
                      mr={1}
                      padding={5}
                      bgColor="white"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? <Image src={hide} /> : <Image src={showe} />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Checkbox
                mt="8"
                mb="8"
                size="lg"
                colorScheme="teal"
                defaultChecked
              >
                I don't want to receive emails about cyberDomain and related
                intuit product and feature updates,marketing best practicies,and
                promotions from cyberDomain.
              </Checkbox>

              <Text>
                By creating an account, you agree to our{" "}
                <span className="spanHeading">Terms</span> and have read and
                acknowledge the{" "}
                <span className="spanHeading">Global Privacy Statement.</span>
              </Text>
              <Button mt={10} bgColor="teal.400" onClick={localStorage.setItem("User", JSON.stringify(user))}>
                Sign Up
              </Button>
            </form>
            <Text mt={5}>
              Invisible reCAPTCHA by Google{" "}
              <span className="spanHeading"> Privacy Policy</span> and{" "}
              <span className="spanHeading">Terms of Use.</span>{" "}
            </Text>
          </Box>
        </Box>
        <Image h="153vh" className="backImage" w="25%" src={flowerpot} />
      </Flex>
    </div>
  );
};

export default SignupPage;
