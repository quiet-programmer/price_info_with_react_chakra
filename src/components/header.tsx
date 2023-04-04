import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box pb={"112px"} as="section">
      <Box
        textAlign={['left', 'left', 'center']}
        color={"#F7FAFc"}
        bg={"#6b46c1"}
        pt={"90px"}
        pb={"198px"}
        px={"32px"}
      >
        <Heading fontWeight={"800"} fontSize={['3xl', '3xl', '5xl']}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight={"500"} fontSize={['lg', 'lg', '2xl']} pt={"16px"}>
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
