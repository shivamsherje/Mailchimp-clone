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
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import cdlogo from "../../assets/cdlogo.png";
import courier from "../../assets/courier.png";
import React from "react";
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
                <Image style={{ cursor: "pointer" }} src={courier} alt="logo1" />
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
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Cyber Domain. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
