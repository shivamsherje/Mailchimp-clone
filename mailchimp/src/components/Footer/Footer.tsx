import { ReactNode } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import cdlogo from "../../assets/cdlogo.png";
import courier from "../../assets/courier.png";
import React from "react";
import Language from "./BelowFooter/Language";
import BelowFooter from "./BelowFooter/BelowFooter";
import "./Footer.style.css";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#e7b75f", "#ffe01b")}
      color={useColorModeValue("#241c15", "#ffe01b")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 6 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Link href={"#"}>Why Mailchimp?</Link>
            <Link href={"#"}>Product Updates</Link>
            <Link href={"#"}>Email Marketing</Link>
            <Link href={"#"}>Websites</Link>
            <Link href={"#"}>Transactional Email</Link>
            <Link href={"#"}>How We Compare</Link>
            <Link href={"#"}>GDPR Compliance</Link>
            <Link href={"#"}>Security</Link>
            <Link href={"#"}>Status</Link>
            <Link href={"#"}>Mobile App</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link href={"#"}>Marketing Library</Link>
            <Link href={"#"}>Free Marketing Tools</Link>
            <Link href={"#"}>Marketing Glossary</Link>
            <Link href={"#"}>Integrations Directory</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Community</ListHeader>
            <Link href={"#"}>Agencies & Freelancers</Link>
            <Link href={"#"}>Developers</Link>
            <Link href={"#"}>Events</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Our Story</Link>
            <Link href={"#"}>Newsroom</Link>
            <Link href={"#"}>Give Where You Live</Link>
            <Link href={"#"}>Annual Report</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Accessibility</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Hire an Expert</Link>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Talk to Sales</Link>
          </Stack>

          <Flex direction="column" gap={10}>
            <Stack align={"flex-start"}>
              <ListHeader>
                <Image style={{ cursor: "pointer" }} src={cdlogo} alt="logo" />
              </ListHeader>
              <Text>
                Films, podcasts, and original series that celebrate the
                entrepreneurial spirit.
              </Text>
            </Stack>

            <Center>
              <Flex className="arrtxt" gap={"15px"}>
                <Text>Check it out</Text>
                <Center>
                  <ArrowForwardIcon className="arrowr" />
                </Center>
              </Flex>
            </Center>

            <Stack align={"flex-start"}>
              <ListHeader>
                <Image
                  style={{ cursor: "pointer" }}
                  src={courier}
                  alt="logo1"
                />
              </ListHeader>
              <Text>
                Expert insights, industry trends, and inspiring stories that
                help you live and work on your own terms.
              </Text>
            </Stack>
            <Center>
              <Flex className="arrtxt" gap={"15px"}>
                <Text>Learn more</Text>
                <Center>
                  <ArrowForwardIcon className="arrowr" />
                </Center>
              </Flex>
            </Center>
          </Flex>
        </SimpleGrid>
      </Container>

      {/* below footer */}

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={16}
          direction={{ base: "column", md: "row" }}
          spacing={8}
          justify={{
            base: "space-evenly",
            md: "space-between",
            sm: "space-between",
          }}
          align={{ md: "center" }}
        >
          <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} spacing={8}>
            <Stack direction={"row"} spacing={6}>
              <BelowFooter />
            </Stack>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Pinterest"} href={"#"}>
                <FaPinterest />
              </SocialButton>
            </Stack>
            <Stack direction={"column"} spacing={4}>
              <Language />
              <Text>
                Pinterest This page is now available in other languages. English
                ©2001-2022 All Rights Reserved. CyberDomain® is a registered
                trademark of The Rocket Science Group. Apple and the Apple logo
                are trademarks of Apple Inc. Mac App Store is a service mark of
                Apple Inc. Google Play and the Google Play logo are trademarks
                of Google Inc.
                <Link ml="4px" mr="4px" fontWeight={"bold"} href={"#"}>
                  Privacy |
                </Link>
                <Link mr="4px" fontWeight={"bold"} href={"#"}>
                  Terms |
                </Link>
                <Link fontWeight={"bold"} href={"#"}>
                  Cookie Preferences
                </Link>
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
