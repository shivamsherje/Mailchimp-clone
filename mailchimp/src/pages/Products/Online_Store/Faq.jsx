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
                      Can I sell a product through CyberDomain?
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
                    Yes, CyberDomain enables you to build an online store and
                    start selling products. Using CyberDomain, you can create a
                    website, build an online store, make sales, and market your
                    business—all on one platform.
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
                      How do I create a store in CyberDomain?
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
                    You can use CyberDomain’s website builder to create a sleek,
                    easy-to-use online store. Once you’ve created a website,
                    CyberDomain can automatically generate product listing pages
                    and product pages for your online store. You can also
                    customize product names, product descriptions, and other
                    important details using our online store builder.
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
                      How much does it cost to make an online store?
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
                    When you use CyberDomain to launch your website and online
                    store, you don’t have to worry about any upfront costs.
                    Instead, CyberDomain will only charge a small transaction
                    fee for sales you make through your online store. Thus, you
                    don’t have to pay anything until you make a sale.
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
                      How to create an online store
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
                    To build an online store in CyberDomain, start off by naming
                    your store and adding products. As you add products, you’ll
                    be able to provide each listing with a name, description,
                    price, and images. CyberDomain will also automatically
                    generate product listings and product pages for any of the
                    products you add to your store.
                  </Text>

                  <Text textAlign="left">
                    Once you’ve added products to your online store, you’ll be
                    able to add information about your business to your online
                    store and set up payment processing. Upon completion of
                    these basic steps, you can publish your online store and
                    start making sales.
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
                      How to promote my online store
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
                    By promoting your online store, you can drive traffic to
                    your website and generate more sales. But how do you promote
                    your online store? With CyberDomain, you have access to all
                    of the marketing tools you need to generate buzz and get
                    your brand in front of the right people.
                  </Text>

                  <Text textAlign="left">
                    One of the easiest ways to promote your online store is
                    through social media. Share a link to your online store via
                    your company social media page or create targeted social
                    media ads. You may also engage in other marketing
                    strategies, such as creating Google ads, initiating an email
                    marketing campaign, or offering promotions for new
                    customers.
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
                      How to start an online store
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
                    In order to start an online store using CyberDomain, you’ll
                    have to create an account and a website. Or, if you haven’t
                    yet created a website, CyberDomain will make one for you as
                    part of the process of setting up your online store. Once
                    these steps have been completed, you can start an online
                    store, add products, set up payment processing, and publish.
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
                      What is a CyberDomain store?
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
                    When you set up an online store through CyberDomain, it
                    becomes part of your company website. Through your CyberDomain
                    online store, you can list the products you sell and make
                    them available for purchase. Shoppers can browse your
                    CyberDomain online store to learn more about your products by
                    viewing images and product descriptions. And, of course,
                    your customers can easily purchase available products by
                    using your online store.
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
