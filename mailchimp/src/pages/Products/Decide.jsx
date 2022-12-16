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

const Decide = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={10} pb={16}>
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
              src="https://eep.io/images/yzco4xsimv0y/2ewurCGaai01QOo0c24QAq/dc5c8ae42584033c0851f19894ee1251/ILLO_Hero_Transactional-Sending_Receiving-1520.png?w=1520&fm=webp&q=80"
              alt="Logo55"
              height={[150, 300, 600]}
              w={[200, 400, 600]}
            />
          </Box>

          <Stack
            direction="column"
            py={4}
            mt={{ md: "20%", sm: "0", base: "0" }}
          >
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
              >
                Decide if CyberDomain is right for you
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
                Check out how our website builder tools stack up against the
                competition.
              </Text>
            </Box>
            <Center>
              <Box
                w="196px"
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
                  See How We Rate
                </Button>
              </Box>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Decide;
