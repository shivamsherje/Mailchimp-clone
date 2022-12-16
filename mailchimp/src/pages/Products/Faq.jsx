import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Box,
  Container,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Box backgroundColor="white" w="100%">
      <Container maxW={"6xl"} pb={16}>
        <Heading as="h2" size="2xl" noOfLines={1} textAlign={"left"} pb={5}>
          FAQs
        </Heading>
        <Accordion allowMultiple borderColor={"grey"}>
          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Can you build a website on CyberDomain?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={6}>
                  <Text textAlign={"left"}>
                    Yes, you can build a website using CyberDomain. Our website
                    builder is free to use and can help you create an attractive
                    site for your business or online store. All sites are
                    responsive and mobile-optimized, so you can ensure visitors
                    have a positive experience with your brand. You can even add
                    appointment scheduling to create and manage appointments and
                    use built-in marketing tools to boost traffic and sales.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      How can I build my own website?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign={"left"}>
                    You can build your own website using our customizable
                    website builder. Choose from several pre-designed themes to
                    begin the design process. Then, change the layout to create
                    a website unique to your brand. Plus, you can see all your
                    edits in real time and don’t need design or coding
                    experience. You’ll also have access to millions of
                    high-quality stock photos, so you don’t have to spend hours
                    taking the perfect photo and uploading it to your site.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      How long does it take to build a website?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign={"left"}>
                    With CyberDomain, you can build and publish a website in
                    under an hour. Whether you’re a busy business owner or
                    bustling entrepreneur, our free web builder provides you the
                    tools to create a stunning website in no time. Even if you
                    don’t have coding or design experience under your belt, you
                    can grow your business and online presence with a well-made,
                    professional site.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      How long does it take to build a website?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="left" pb={5}>
                    To build a business website with CyberDomain, you have to
                    first map out your site and determine the structure. You can
                    create as many pages as you want with our website builder.
                    Here are a few important pages to include:
                  </Text>
                  <UnorderedList textAlign={"initial"} pb={5}>
                    <ListItem>Home page</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Product/service pages</ListItem>
                    <ListItem>Pricing page</ListItem>
                  </UnorderedList>
                  <Text textAlign="left">
                    Then, you’ll choose the best template for your business. We
                    provide you with a wide range of customizable themes, fonts,
                    and color palettes to make this process easy. Once you’re
                    done building and optimizing your site, you can publish it.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      How to integrate CyberDomain with a website?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="left">
                    In addition to helping you build a website, we also provide
                    intelligent marketing tools to ensure it attracts the right
                    audience. From built-in signup and pop-up forms that engage
                    visitors to behavioral targeting, growing your customer base
                    has never been easier. If you already have an existing
                    website, you can integrate CyberDomain by heading over to
                    the Integrations page and clicking Manage under the
                    Integrations tab.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What is a website builder?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="left" pb={5}>
                    A website builder is a tool that allows you to create a
                    website regardless of your experience. Many website builders
                    use drag-and-drop functions, allowing you to customize your
                    site any way you like. While there are several builders to
                    choose from, CyberDomain provides you with exclusive
                    features, including:
                  </Text>
                  <UnorderedList textAlign={"initial"} pb={5}>
                    <ListItem>Marketing CRM</ListItem>
                    <ListItem>Paid and organic social posting</ListItem>
                    <ListItem>Site-level reporting</ListItem>
                    <ListItem>Unlimited landing pages</ListItem>
                    <ListItem>And more</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem pt={5} pb={5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Which website builder is best for Mailchimp?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="left">
                    Ultimately, the best website builder is one that meets your
                    specific business needs. With Mailchimp, you can build your
                    website and promote it using one single marketing platform
                    for free.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faq;
