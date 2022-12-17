import { Box, Grid, GridItem, Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'

function ContactSupport() {
  return (
    <Box py={"100px"} mt={"100px"} bgColor={"#fee017"}>
      <Grid px={"15%"} gridTemplateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <Image
            w={"80%"}
            src="https://mailchimp.com/static/images/contact-mailchimp.png"
          />
        </GridItem>
        <GridItem>
          <Flex textAlign={"left"} flexDirection={"column"}>
            <Text mb={2} fontSize={"4xl"}>Contact our support team</Text>
            <Text fontSize={"2xl"}>
              Have more questions? Paid users can log in and email or chat with
              us.
            </Text>
            <Box mt={8} className="btn-shadow">
              <Button
                colorScheme={"white"}
                className="btn-hover-an"
                bgColor={"#fee017"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"20px"}
                fontSize={"sm"}
                p={"22px"}>
                Get started
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ContactSupport