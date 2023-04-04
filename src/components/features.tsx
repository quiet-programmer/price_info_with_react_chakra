import { Box, Flex, Stack, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/icons";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing={"24px"}>
      <Icon as={icon} boxSize={['32px', '32px', '48px']} />
      <Text textAlign={"left"} fontSize={['12px', '12px', '18px']} fontWeight={"700"}>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW={"1024px"} m={"auto"} pt={['30px', '30px', '60px']} pb={"35px"}>
      <Stack direction={['column', 'column', 'row']} px={"48px"} spacing={"20px"}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>

        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>

        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
