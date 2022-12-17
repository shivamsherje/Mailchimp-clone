import React from "react";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

function Help() {
  return (
    <Box textAlign={"left"} mt={"100px"} px={"15%"}>
      <Text mb={12} fontSize={"3xl"}>
        Help by topic
      </Text>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={16}>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Accounts
          </Text>
          <Text color={"#241c15"}>
            Set up your account, learn about billing, and stay up-to-date on
            compliance policies.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Audiences
          </Text>
          <Text color={"#241c15"}>
            Import contacts, create signup forms, and manage your Mailchimp
            audiences.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            All the Merge Tags Cheat Sheet
          </Text>
          <Text color={"#241c15"}>
            Merge tags let you insert dynamic content in your campaigns. Get a
            list containing each merge tag and how to use it.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Automation
          </Text>
          <Text color={"#241c15"}>
            Automatically send purchase emails, welcome messages, and more.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Email Delivery
          </Text>
          <Text color={"#241c15"}>
            Learn how we deliver email and how you can ensure contacts get your
            campaigns
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Emails
          </Text>
          <Text color={"#241c15"}>Use Mailchimp to build and send emails for your contacts.</Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Edit and Design
          </Text>
          <Text color={"#241c15"}>
            Customize the content of your emails, landing pages, website, and
            other types of marketing in Mailchimp..
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Emails
          </Text>
          <Text color={"#241c15"}>Use Mailchimp to build and send emails for your contacts.</Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Facebook and Instagram Ads
          </Text>
          <Text color={"#241c15"}>
            Set up and purchase ads for Facebook or Instagram without leaving
            your Mailchimp accounts.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Getting Started
          </Text>
          <Text color={"#241c15"}>
            Learn how to set up your account, import contacts, and create your
            first campaign.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Google Remarketing Ads
          </Text>
          <Text color={"#241c15"}>
            Reach potential customers all across the internet with Google
            remarketing ads
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Integrations
          </Text>
          <Text color={"#241c15"}>
            Connect Mailchimp with your e-commerce store and other apps.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Mailchimp & Co
          </Text>
          <Text color={"#241c15"}>
            Learn how to use the tools that help you manage your clients and the
            benefits of joining our partner program.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Merge Tags
          </Text>
          <Text color={"#241c15"}>
            Personalize your campaigns with contact names, social media buttons,
            blog posts, and more.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Mobile Apps
          </Text>
          <Text color={"#241c15"}>
            Learn how to use Mailchimp on tablets, smartphones, and other mobile
            devices.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Postcards
          </Text>
          <Text color={"#241c15"}>
            Send a printed postcard campaign that people can hold in their hands
            or stick on the fridge.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Reports
          </Text>
          <Text color={"#241c15"}>
            Get performance stats for your marketing efforts and e-commerce
            store.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Templates
          </Text>
          <Text color={"#241c15"}>
            Use a prebuilt design or code your own templates for email
            campaigns.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Transactional Email
          </Text>
          <Text color={"#241c15"}>
            Send one-to-one e-commerce emails and automated transactional emails
            with Transactional Email's delivery service.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Websites
          </Text>
          <Text color={"#241c15"}>
            Purchase a domain and create your own website with Mailchimp.
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"#002023"} mb={2} fontSize={"2xl"}>
            Data Privacy
          </Text>
          <Text color={"#241c15"}>
            Find answers to commonly asked questions related to
            Mailchimp's privacy practices.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Help;
