import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import TextComponent from "./TextComponent";
  import cdlogo from '../../assets/cdlogo.png'
  import courier from '../../assets/courier.png'
import rightArrow from '../../assets/right-up.png'
  import {Link} from "react-router-dom"


  const InspirationDrawer = ({ ram }) => {
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
                <Flex>
              <Image src={cdlogo} alt='cd logo' width="18rem" />
              <Link to="/presents">
              <Image src={rightArrow} width="20px" mt={4} ml={2} height="20px" _hover={{height:"30px",mt:"10px"}}/>
              </Link>
              </Flex>
              <Link to={"/presents"}>
                <TextComponent >Podcasts</TextComponent>
              </Link>
                <Link to={"/presents"}>
                  <TextComponent >Series</TextComponent>
                </Link>
              <Link to={"/presents"}>
                <TextComponent >Films</TextComponent>
              </Link>
              <Divider mt={10} mb={10} orientation="horizontal" />
              <Flex>
              <Image ml={-8} src={courier} alt='courier logo' width="18rem" />
              <Image src={rightArrow} width="20px" mt={6} ml={2} height="20px" _hover={{height:"30px",mt:"15px"}}/>
              </Flex>
              <TextComponent>Expert Insights</TextComponent>
              <TextComponent>Industry Trends</TextComponent>
              <TextComponent>Smart Living</TextComponent>
              <Divider mt={10} mb={10} orientation="horizontal" />
              <Text  fontSize="xl" mt={5} mb={20}>Talk to Sales: +1 (800) 315-5939</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default InspirationDrawer;
  