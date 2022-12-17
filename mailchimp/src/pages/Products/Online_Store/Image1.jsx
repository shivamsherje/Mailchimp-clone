import {
  Box,
  Stack,
  Container,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "./OnlineStores.style.css";

const Image1 = () => {
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
            mt={{ md: "20%", sm: "0", base: "0" }}
          >
            <Box>
              <Text
                fontWeight="400"
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="2rem"
                lineHeingt="1.33333333"
                color="#241c15"
                textAlign={"left"}
              >
                Make sales and manage orders
              </Text>
            </Box>
            <Box pb={{ base: "0", sm: "20px", md: "50px" }}>
              <Text
                fontFamily="Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif"
                fontSize="1em"
                lineHeingt="1.5"
                color="#241c15"
                fontWeight="400"
                textAlign={"left"}
              >
                Connect your online store to Stripe to accept payments and start
                selling* immediately. Once you start fulfilling orders, order
                and shipping notification emails make it simple to stay in touch
                with customers after they buy. At-a-glance website analytics
                help you understand what's working and where you can improve so
                that you make more sales.
              </Text>
            </Box>
          <Box>
            <Text textAlign={"left"} fontStyle="italic">
              *Stores are currently only supported in the United States and
              United Kingdom
            </Text>
          </Box>
          </Stack>
          <Box
            m={{ sm: "auto", base: "auto" }}
            mb={{ sm: "0px" }}
            justify={{ sm: "center", base: "center" }}
          >
            <Image
              className="imgp"
              src="https://eep.io/images/yzco4xsimv0y/46Hov8sKTTtvzaQ9ztOvAq/2fe76732612d13ffa5ae506950e848d3/20_AUI_Stores-Feature-Page_Make-Sales-min.png?w=1520&fm=webp&q=80"
              alt="Logo2"
              height={[150, 300, 600]}
              w={[200, 400, 600]}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Image1;
