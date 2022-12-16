import {
  Box,
  Stack,
  Container,
  Image,
  Text,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import "./Product.style.css";

export const Unsplash = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={{ md: "16", sm: "0", base: "0" }}
        >
          <Box
            m={{ sm: "auto", base: "auto" }}
            mb={{ sm: "0px" }}
            justify={{ sm: "center", base: "center" }}
          >
            <Image
              className="imgp"
              src="https://eep.io/images/yzco4xsimv0y/4baQWlmsG4qrOB9PdgLXIk/44f2170bb2a1de30eda362640f10446b/AUI_Website-Builder_05-Unsplash.png?w=1520&fm=webp&q=80"
              alt="Logo3"
              height={[150, 300, 500]}
              w={[200, 400, 600]}
            />
          </Box>

          <Stack
            direction="column"
            py={4}
            mt={{ md: "14%", sm: "0", base: "0" }}
          >
            <Box>
                <Button borderRadius="20" style={{cursor:"text"}} >Powered by Unsplash</Button>
            </Box>
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
              >
                Use beautiful imagery for free
              </Text>
            </Box>
            <Box pb={{ base: "0", sm: "20px", md: "50px" }}>
              <Text
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="1em"
                lineHeingt="1.5"
                color="#241c15"
                fontWeight="400"
              >
                Building a unique, customizable website shouldn't be difficult.
                Use our built-in stock photo library to choose from over 2
                million free, professional-quality photos. While other website
                builders put the burden on the user to find and upload their own
                images, CyberDomain makes things simple.
              </Text>
            </Box>
            <Center>
              <Box
                w="190px"
                h="50px"
                borderRadius="50px"
                bg="black"
                margin="auto"
                mt="30px"
              >
                <Button
                  className="btn-strtB"
                  w="100%"
                  h="50px"
                  fontSize="16px"
                  borderRadius="50px"
                  background="#ffe01b"
                  backgroundColor="#ffe01b"
                  border="1px solid black"
                  pos="-moz-initial"
                  fontWeight="bold"
                >
                  Start publishing
                </Button>
              </Box>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
