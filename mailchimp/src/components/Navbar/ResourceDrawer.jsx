import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Text,
  useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
import TextComponent from "./TextComponent";
  import {Link} from "react-router-dom"
  
  const ResourceDrawer = ({ ram }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
      <>
        <Text ref={btnRef} bgColor="white" _hover={{color:"teal",textDecoration:"underLine",cursor:"pointer"}} onClick={onOpen}>
          {ram}
        </Text>
        <Drawer
          size="md"
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Text mt={5} mb={5} fontSize="sm">LEARN — </Text>
              <Link to={"/cyberdomain101"}>
                <Text mt={5} mb={5} fontSize="xl" _hover={{color:"teal",cursor:"pointer"}}>Cyberdomain 101 </Text>
              </Link>
              <Link to={"/help-center"}>
                <Text mt={5} mb={5} fontSize="xl" _hover={{color:"teal",cursor:"pointer"}}>Help Center </Text>
              </Link>
              <TextComponent >Marketing Library</TextComponent>
              <Divider mt={10} mb={10} orientation="horizontal" />
              <Text fontSize="sm" mt={5} mb={5}>COMMUNITY— </Text>
              <TextComponent>For Freelancers & Agencies</TextComponent>
              <TextComponent>For Developers</TextComponent>
              <TextComponent>Hire A Trusted Partner</TextComponent>
              <Divider mt={10} mb={10} orientation="horizontal" />
              <Text  fontSize="xl" mt={5} mb={5}>Talk to Sales: +1 (800) 315-5939</Text>
              <Divider mt={10} mb={10} orientation="horizontal" />
              <Text  fontSize="md" mt={5} mb={5} fontWeight="bold">App Integrations</Text>
              <p>Connect your digital tools so you can do more with your marketing.</p>
              <p style={{marginBottom:"30px",color:"teal" }}>See All integrations →</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default ResourceDrawer;
  