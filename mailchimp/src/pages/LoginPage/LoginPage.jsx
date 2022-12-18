import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./LoginPage.css";
import onlyLogo from "../../assets/Onlylogo.png";
import { useState } from "react";
import showe from "../../assets/show.png";
import hide from "../../assets/hide.png";
import { useNavigate,Link } from "react-router-dom";
const LoginPage = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

   const redirect=()=>{
    if((user.email===email)||(user.username===email)){
      if(user.password===password){
        
       navigate('/addproduct')
      }

    }

   }
  return (
    <div>
      <Flex>
        <Box
          textAlign="left"
          padding={5}
          className="mainbox"
          w="35%"
          h="153vh"
          bgColor="white"
          position="absolute"
          left={4}
        >
          <Link to="/">
          <Image src={onlyLogo} w={20} />
          </Link>
          <Heading mt="30%">Log In</Heading>
          <Text mt={5}>
            Need a CyberDomain account?{" "}
            <span className="spanHeading">Create an account</span>{" "}
          </Text>
          <form>
            <Text mb={2}>Username Or Email</Text>
            <Input
              mb={5}
              size="lg"
              variant="outline"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text mb={2}>Password</Text>
            <InputGroup size="md">
              <Input size="lg" pr="4.5rem" type={show ? "text" : "password"} onChange={(e)=>setPassword(e.target.value)} />
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
            <Button w="100%" mt={10} mb={5} bgColor="teal.400" onClick={redirect}>
              Log in
            </Button>
            <Link to="/login">Go to admin panel</Link>
            <Checkbox
              ml="30%"
              mt="8"
              mb="8"
              size="lg"
              colorScheme="teal"
              defaultChecked
            >
              Keep me Logged in
            <Flex justifyContent="center" gap={5}>
              <Text className="spanHeading">Forgot username? </Text>
              <Text className="spanHeading"> Forgot password?</Text>
            </Flex>
            </Checkbox>
            <Text textAlign="center" className="spanHeading">
              Can't Log In?
            </Text>
            <Text fontSize="12px" mt="80px">
              ©2001–2022 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group, LLC.{" "}
              <span className="spanHeading">Cookie Preferences,</span>{" "}
              <span className="spanHeading">Privacy</span> , and{" "}
              <span className="spanHeading">Terms.</span>
            </Text>
          </form>
        </Box>
        <Image
          h="153vh"
          className="backimage"
          w="100%"
          src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg"
        />
      </Flex>
    </div>
  );
};

export default LoginPage;
