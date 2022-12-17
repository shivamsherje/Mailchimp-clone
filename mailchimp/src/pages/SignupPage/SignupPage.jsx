import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PasswordInput from "./PasswordInput";
import "./SignupPage.css";
const SignupPage = () => {
  return (
    <div>
      <Flex>
        <Box
          textAlign="left"
          padding={5}
          w="35%"
          h="153vh"
          bgColor="white"
          position="absolute"
          left={4}
        >
          <Heading mt="50%">Log In</Heading>
          <Text mt={5}>
            Need a Mailchimp account?{" "}
            <span className="spanHeading">Create an account</span>{" "}
          </Text>
          <form>
            <Text mb={2}>Username Or Email</Text>
            <Input mb={5} size="lg" variant="outline" type="email" />
            <Text mb={2}>Password</Text>
            <PasswordInput />
            <Button w="100%" mt={10} bgColor="teal.400">
              Log in
            </Button>
            <Checkbox ml="30%" mt="8" mb="8" size="lg" colorScheme="teal" defaultChecked>
              Keep me Logged in
            </Checkbox>
            <Flex justifyContent="center" gap={5}>
            <Text className="spanHeading" >Forgot username?  </Text>
            <Text className="spanHeading" > Forgot password?</Text>
            </Flex>
            <Text textAlign="center"  className="spanHeading" >Can't Log In?</Text>
            <Text fontSize="12px" mt="80px">©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group, LLC. <span className="spanHeading">Cookie Preferences,</span> <span className="spanHeading">Privacy</span> , and <span className="spanHeading">Terms.</span></Text>
          </form>
        </Box>
        <Image
          h="153vh"
          w="100%"
          src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg"
        />
      </Flex>
    </div>
  );
};

export default SignupPage;
