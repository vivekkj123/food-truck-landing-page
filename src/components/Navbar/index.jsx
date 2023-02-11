import { Button, color, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Flex paddingY={5} alignItems={"center"} zIndex={"20"}>
      <Img src={logo} display={{ md: "block", base: "none" }} />
      <Spacer />
      <Button
        borderRadius={38}
        color={"white"}
        borderColor={"white"}
        borderWidth={2}
        outline={"white"}
        background={"transparent"}
        padding={6}
        _hover={{
          background: "white",
          color: "primary",
        }}
      >
        Get In Touch
      </Button>
    </Flex>
  );
};

export default Navbar;
