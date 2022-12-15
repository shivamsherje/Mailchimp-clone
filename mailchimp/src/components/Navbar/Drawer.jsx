import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import website from "../../assets/website.png";
import search from "../../assets/search.png";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div >
      <Button ref={btnRef} bgColor="white" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer 
        size="sm"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <Flex gap="5">
              <img src={website} style={{ width: "20px" }} alt="website" />
              <img src={search} style={{ width: "20px" }} alt="search" />
            </Flex>
          </DrawerHeader>

          <DrawerBody  >
            <h3  style={{margin:"10px"}}>Products</h3>
            <h3 style={{margin:"10px"}}>Resources</h3>
            <h3 style={{margin:"10px"}}>Inspirations</h3>
            <h3 style={{margin:"10px"}}>Pricing</h3>
            <h3 style={{margin:"10px"}}>Talk to Sales <PhoneIcon/></h3>
            <hr />
            
            <h3 style={{margin:"10px"}}>Product Updates</h3>
              <p style={{fontSize:"14px",margin:"10px"}}>
              Get the latest on new features,product improvements,and other announcements.
              </p>
              <p style={{fontSize:"14px",color:"teal",margin:"10px"}}>See What's New →</p>
          </DrawerBody>
          <hr/>
          <DrawerFooter mr="25%">
            <Button bgColor="white" mr={3} >
              Login
            </Button>
            <Button bgColor="white" >Sign up Free</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default DrawerExample;
