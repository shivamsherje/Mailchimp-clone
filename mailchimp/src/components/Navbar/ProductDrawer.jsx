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
import {Link} from 'react-router-dom'

const ProductDrawer = ({ ram }) => {
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
            <Text mt={5} mb={5} fontSize="sm">WE'LL HELP YOU — </Text>
            <Link to="/products">
            <TextComponent >Get Your Bussiness Online</TextComponent>
            </Link>
            <Link to="/onlinestores">
            <TextComponent>Online Stores</TextComponent>
            </Link>
            <Divider mt={10} mb={10} orientation="horizontal" />
            <Text fontSize="sm" mt={5} mb={5}>PLATFORM FEATURES — </Text>
            <TextComponent>Audience Management</TextComponent>
            <TextComponent>Creative Tools</TextComponent>
            <TextComponent>Marketing Automation</TextComponent>
            <TextComponent>Insights & Analytics</TextComponent>
            <Divider mt={10} mb={10} orientation="horizontal" />
            <Text  fontSize="sm" mt={5} mb={5}>NOT SURE WHERE TO START? —</Text>
            <TextComponent>What's Right for Me?</TextComponent>
            <Divider mt={10} mb={10} orientation="horizontal" />
            <Text  fontSize="xl" mt={5} mb={5}>Talk to Sales: +1 (800) 315-5939</Text>
            <Divider mt={10} mb={10} orientation="horizontal" />
            <Text  fontSize="md" mt={5} mb={5} fontWeight="bold">Product Updates</Text>
            <p>Get the latest on new features, product improvements, and other announcements.</p>
            <p style={{marginBottom:"30px",color:"teal" }}>See what's new →</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductDrawer;
