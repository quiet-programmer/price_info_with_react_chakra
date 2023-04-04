import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "../icons/icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as={"li"} spacing={"20px"} {...rest} alignItem={'start'}>
      <Icon as={CheckIcon} w={"22px"} h={"22px"} />
      <Text textAlign={['left', 'left', 'center']}>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  return (
    <Box mx={"6"}>
      <Box
        margin={"auto"}
        maxW={"994px"}
        mt={"-256px"}
        borderRadius={"12px"}
        overflow={"hidden"}
        boxShadow={
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      >
        <Flex direction={["column", "column", "row"]}>
          <Box textAlign={"center"} bg={"#f0eafb"} p={"30px"}>
            <Text fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Text>
            <Heading as={"h3"} fontSize={['5xl', '5xl', '6xl']} mt={"16px"}>
              $329
            </Heading>
            <Text
              color={"#171923"}
              fontSize={"18px"}
              fontWeight={"500"}
              mt={"8px"}
            >
              billed just once
            </Text>
            <Button colorScheme="purple" size={"lg"} w={"282px"} mt={"24px"}>
              Get Started
            </Button>
          </Box>
          <Box p={"60px"} fontSize={"18px"} bg={"white"}>
            <Text textAlign={"left"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as={"ul"} spacing={"20px"} pt={"24px"}>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
