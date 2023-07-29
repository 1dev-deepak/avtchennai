import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { menuItemHover } from "../styles/navbar.style";

const NavbarComponent = () => {
  return (
    <Flex justify="space-between" bg="white" alignItems="center">
      <Box p="4" color="blue.400">
        <Link fontSize="xl" fontWeight="bold" href="#home" _hover={{}}>
          Alandur Vel Travels
        </Link>
      </Box>
      <Box p="4">
        <Flex justify="center" gap="8">
          <Link color="blue.900" _hover={menuItemHover} href="#home">
            Home
          </Link>
          <Link color="blue.900" _hover={menuItemHover} href="#services">
            Services
          </Link>
          <Link color="blue.900" _hover={menuItemHover} href="#packages">
            Packages
          </Link>
          <Link color="blue.900" _hover={menuItemHover} href="#gallery">
            Gallery
          </Link>
          <Link color="blue.900" _hover={menuItemHover} href="#contact">
            Contact
          </Link>
        </Flex>
      </Box>
      <Box p="4">
        <Button
          leftIcon={<PhoneIcon />}
          bg="blue.400"
          color="white"
          _hover={{ bg: "blue.500" }}
        >
          9840797729
        </Button>
      </Box>
    </Flex>
  );
};

export default NavbarComponent;
