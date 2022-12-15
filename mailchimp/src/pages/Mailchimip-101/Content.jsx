import React from 'react'
import { Image, Text, Box, Heading, Grid, GridItem } from "@chakra-ui/react";

function Content() {
  return (
    <Box mt={"400px"}>
      <Grid m={"auto"} w={"70%"} templateColumns={"repeat(2, 1fr)"} gap={6}>
        <GridItem>
          <Image
            width={"85%"}
            src="https://eep.io/images/yzco4xsimv0y/4YrseyUbDGeZp5Mp1zQXs/a5639d145d8acfdd57a62c25a6448df7/audience_b_w.png?w=1080&fm=webp&q=80"
          />
        </GridItem>
        <GridItem>
          <Box>
            <Heading>Let’s start building your audience</Heading>
            <Text fontSize={"xl"} mt={6}>
              Just by bringing all your contact data into Mailchimp, we can
              start to show you helpful insights about your audience. We’ll help
              you find new ways to talk to people who love your brand—and new
              ways to reach people who are likely to.
              <br />
              <br />
              Even if you don’t have contacts to market to yet, you can always
              log in and start playing around with our design tools. In fact, we
              recommend it.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Content