import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import "./Pricing.css";

function Pricing() {
  return (
    <Box bg="#f6f6f4" pb="80px">
      <Heading
        fontWeight="medium"
        fontSize="40px"
        fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
        textAlign="center"
        pt="80px"
        mb="40px"
      >
        Find the right plan
        
      </Heading>

      <Box className="price_section">
        <Box className="cards1">
          <Heading
            mb="15px"
            fontWeight="medium"
            fontSize="20px"
            color="black"
            fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
          >
            Primium
          </Heading>

          <Text mb="15px" fontSize="14px">
            Our most advanced tools, unlimited contacts, and priority support;
            built for teams.
          </Text>

          <Text fontSize="14px">starts at</Text>

          <Text fontWeight="semibold" color="black" display="flex">
            ₹
            <span>
              <Heading
                fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
                fontWeight="medium"
                color="black"
              >
                {" "}
                23,000
              </Heading>
            </span>
          </Text>

          <Text fontSize="14px">/month based on 10,000 contacts*</Text>

          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">Phone & Priority Support</Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Custom-Coded and Pre-built Email Templates
              </Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Multivariate and A/B Testing
              </Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Enhanced Autometed Customer Journey
              </Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />

            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Dedicated Onboarding Specialist
              </Text>
            </Text>
          </Box>
        </Box>
        {/* -----1---- */}

        <Box className="cards2" position="relative">
          <Heading
            mb="15px"
            fontWeight="medium"
            fontSize="20px"
            color="black"
            fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
          >
            Standerd
          </Heading>
          <Text mb="15px" fontSize="14px">
            Sell even more with personalization, optimization tools, and
            enhanced automations{" "}
          </Text>
          <Text fontSize="14px">starts at</Text>
          <Text fontWeight="semibold" color="black" display="flex">
            ₹
            <span>
              {" "}
              <Heading
                fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
                fontWeight="medium"
                color="black"
              >
                1,150
              </Heading>
            </span>
          </Text>
          <Text fontSize="14px">/month based on 10,000 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">24/7 Email & Chat Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Custom-Coded and Pre-built Email Templates
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline"> A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">
                Enhanced Autometed Customer Journey
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon color="black" />
              <Text textDecoration="underline">Predictive Segmentation</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Dedicated Onboarding Specialist
              </Text>
            </Text>
          </Box>
        </Box>
        {/* ----2----- */}

        <Box className="cards3">
          <Heading
            mb="15px"
            fontWeight="medium"
            fontSize="20px"
            color="black"
            fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
          >
            Essentials
          </Heading>
          <Text mb="30px" fontSize="14px">
            Send the right content at the right time with testing and scheduling
            features.
          </Text>
          <Text fontSize="14px">starts at</Text>
          <Text fontWeight="semibold" color="black" display="flex">
            ₹
            <span>
              {" "}
              <Heading
                fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
                fontWeight="medium"
                color="black"
              >
                770
              </Heading>
            </span>
          </Text>
          <Text fontSize="14px">/month based on 500 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">24/7 Email & Chat Support</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">Pre-built Email Templates</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline"> A/B Testing</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">
                Basic Automated Customer Journeys
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Predictive Segmentation
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Dedicated Onboarding Specialist
              </Text>
            </Text>
          </Box>
        </Box>
        {/* ------3--------- */}

        <Box className="cards4">
          <Heading
            mb="15px"
            fontWeight="medium"
            fontSize="20px"
            color="black"
            fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
          >
            Free
          </Heading>
          <Text mb="30px" fontSize="14px">
            Easily create email campaigns and learn more about your customers.
          </Text>
          <Text fontSize="14px">starts at</Text>
          <Text fontWeight="semibold" color="black" display="flex">
            ₹
            <span>
              {" "}
              <Heading
                fontFamily="Means Web,Georgia,Times,Times New Roman,serif"
                fontWeight="medium"
                color="black"
              >
                0
              </Heading>
            </span>
          </Text>
          <Text fontSize="14px">/month based on 500 contacts*</Text>
          <Box className="pricing-child">
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">
                Email support for first 30 days
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">Max Contacts:Unlimited</Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CheckIcon />
              <Text textDecoration="underline">
                Custom-Coded and Pre-built Email Templates
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                {" "}
                A/B Testing
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Enhanced Autometed Customer Journey
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Predictive Segmentation
              </Text>
            </Text>
            <hr />
            <Text display="flex" gap={3} alignItems="center">
              <CloseIcon color="#bdbbb9" />
              <Text textDecoration="underline" color="#bdbbb9">
                Dedicated Onboarding Specialist
              </Text>
            </Text>
          </Box>
        </Box>
        {/* -------4--------- */}
      </Box>

      <Text color="#8e8e8e" fontSize={16} mt="20px" textAlign="center">
        *Overages apply if contact or email send limit is exceeded. Free plan
        sending will be paused if contact or email send limit is exceeded. Learn
        more
      </Text>

      <Box
        w="200px"
        h="50px"
        borderRadius="50px"
        bg="black"
        margin="auto"
        mt="50px"
      >
        <Button
          className="btn-signup"
          w="100%"
          h="50px"
          borderRadius="50px"
          background="#ffe01b"
          border="1px solid black"
          pos="-moz-initial"
        >
          See all plan Details
        </Button>
      </Box>
    </Box>
  );
}
export default Pricing;
