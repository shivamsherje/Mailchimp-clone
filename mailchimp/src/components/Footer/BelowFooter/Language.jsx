import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Language = () => {
  return (
    <Menu>
      <MenuButton
        backgroundColor="#ffe01b"
        _hover={{ backgroundColor: "#ffe01b" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Language
      </MenuButton>
      <MenuList>
        <MenuItem>English</MenuItem>
        <MenuItem>Español</MenuItem>
        <MenuItem>Français</MenuItem>
        <MenuItem>Português </MenuItem>
        <MenuItem>Deutsch</MenuItem>
        <MenuItem>Italiano</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Language;
