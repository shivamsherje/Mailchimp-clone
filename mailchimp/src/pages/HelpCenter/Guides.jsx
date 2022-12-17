import React from 'react'
import {
  Box,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";

function Body() {
  return (
    <Box textAlign={"left"} mt={"100px"} px={"15%"}>
      <Text mb={12} fontSize={"3xl"}>
        Popular guides and tutorials
      </Text>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={12}>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            Getting Started with Tags
          </Text>
          <Text>
            Tags are labels you create to help organize your contacts in
            Mailchimp. Learn how to use tags, where to find them, and how to get
            started.
          </Text>
        </GridItem>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            Requirements and Best Practices for Audiences
          </Text>
          <Text>
            An audience of engaged contacts means more sales and a higher return
            on investment (ROI). Get tips and requirements for maintaining your
            Mailchimp audience.
          </Text>
        </GridItem>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            All the Merge Tags Cheat Sheet
          </Text>
          <Text>
            Merge tags let you insert dynamic content in your campaigns. Get a
            list containing each merge tag and how to use it.
          </Text>
        </GridItem>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            Import Contacts to Mailchimp
          </Text>
          <Text>
            Learn how to use our import tool to add or update contacts in
            Mailchimp.
          </Text>
        </GridItem>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            About Mailchimp Pricing Plans
          </Text>
          <Text>
            Whether you're starting out or already have a large number of
            contacts, we have a pricing option for you. Learn about Mailchimp's
            pricing plans, features, and add-ons.
          </Text>
        </GridItem>
        <GridItem>
          <Text mb={2} fontSize={"2xl"}>
            Apple Privacy Update FAQs
          </Text>
          <Text>
            In this article, you'll get answers to common questions about
            Apple's new privacy protection update.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Body