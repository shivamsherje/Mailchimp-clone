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

export const SellProduct1 = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container as={Stack} maxW={"6xl"} pt={10} pb={16}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={{ md: "16", sm: "0", base: "0" }}
        >
          <Stack
            direction="column"
            py={4}
            mt={{ md: "14%", sm: "0", base: "0" }}
          >
            <Box>
              <Button
                colorScheme="pink"
                _hover={{
                  background: "#ff3ebf",
                  color: "white",
                }}
                borderRadius="20"
                style={{ cursor: "text" }}
              >
                New
              </Button>
            </Box>
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
              >
                Offer appointments online
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
                LAdd free appointment scheduling to your site so that customers
                can book your services.
              </Text>
            </Box>

            <Center>
              <Box
                w="280px"
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
                  Start taking appointments
                </Button>
              </Box>
            </Center>
          </Stack>
          <Box
            m={{ sm: "auto", base: "auto" }}
            mb={{ sm: "0px" }}
            justify={{ sm: "center", base: "center" }}
          >
            <Image
              className="imgp"
              src="https://eep.io/images/yzco4xsimv0y/UovsrBActJh9Y0S1EzDQH/59047fb94042838758ab30e8de2a816b/_NewAppt_Website-Builder_AUI.png?w=1520&fm=webp&q=80"
              alt="Logo4"
              height={[150, 300, 500]}
              w={[200, 400, 600]}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
