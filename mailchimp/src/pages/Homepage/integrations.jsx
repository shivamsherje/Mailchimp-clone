// import { useState } from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./integrations.style.css";
import Canva from "../../assets/Canva.jpg";
import Instagram from "../../assets/Instagram.jpg";
import Qb from "../../assets/Quickbooks.jpg";
import Google from "../../assets/Google.jpg";
import Salesforce from "../../assets/Salesforce.jpg";
import Shopify from "../../assets/Shopify.jpg";
import Squarespace from "../../assets/Squarespace.jpg";
import Woocommerce from "../../assets/WooCommerce.jpg";
import Zapier from "../../assets/Zapier.jpg";
import useWindowSize from "./WindowSize";

function Integrations() {
  const [height, width] = useWindowSize();

  return (
    <>
      <Box width="90%" mb="80px" margin="auto">
        <Heading
          ml="4.5%"
          mb="30px"
          mt="40px"
          fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
          fontWeight="medium"
        >
          Bring in more data, drive more <br /> growth with our integrations
        </Heading>

        <Box className="integration">
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Canva} alt="canva"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Canva
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Create Compelling for your marketing.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Salesforce} alt="salesforce"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Mailchimp for Salesforce
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Sync your Mailchimp subsctibers and Salesforce leads across
                  platforms.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Instagram} alt="canva"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Instagram
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Promote and shate your instagram posts in email campains.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Shopify} alt="Shopify"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Shopify
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Sync Shopify customers,products,and purchase data to
                  Mailchimp.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Google} alt="Google"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Google Analytics
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  unlock powerful insights with campaign, website,or landing
                  page data.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Woocommerce} alt="Woocommerce"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                WooCommerce
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Power your ecommerce store with smart marketing features.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Qb} alt="quickbooks online"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                QuickBooks Online
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Bring together your marketing toole and invoice data.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box className={width > 480 ? "canva" : "canva-after"}>
            <Image src={Squarespace} alt="Squarespace"></Image>
            <Box>
              <Text fontWeight="bolder" fontFamily="sans-serif">
                Squarespace Commerce
              </Text>
              {width > 480 ? (
                <Text fontFamily="sans-serif" color="#616161">
                  Market your ecommerce business and drive sales.
                </Text>
              ) : (
                ""
              )}
            </Box>
          </Box>
          {width > 767 ? (
            <Box className={width > 480 ? "canva" : "canva-after"}>
              <Image src={Zapier} alt="Zapier"></Image>
              <Box>
                <Text fontWeight="bolder" fontFamily="sans-serif">
                  Canva
                </Text>
                {width > 480 ? (
                  <Text fontFamily="sans-serif" color="#616161">
                    Automatically pass data between web services without a
                    single line code.
                  </Text>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Box w="100%" h="auto" bg="#f6f6f4" pt="40px" pb="40px">
        <Box w="95%" textAlign="left" margin="auto" fontSize={12}>
          <Text pl="16px">*Discilamers</Text>
          <Text>
            1. Mailchimp is the #1 email marketing and automation brand based on
            competitor brands' publicly available data on worldwide numbers of
            customers in 2021 / 2022.
          </Text>
          <Text>
            2. Generate up to 4X more orders with Customer Journey Builder
            automations based on orders generated through user's connected
            stores with automations versus when they used bulk emails.
          </Text>
          <Text>
            3. Get up to 88% more revenue based on emails sent with predicted
            segments against non-predictive segmented emails for users with
            connected stores only. Standard or Premium Plan only. Availability
            of features and functionality varies by plan type. For details, view
            plans and pricing.
          </Text>
        </Box>
      </Box>
    </>
  );
}
export default Integrations;
