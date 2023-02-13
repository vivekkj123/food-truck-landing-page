import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo.svg";
import FacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <Grid
      templateColumns={["repeat(1,1fr)", "repeat(4,1fr)"]}
      bgColor={"#F8f8f8"}
      paddingTop={["52px", "84px"]}
      paddingBottom={"92px"}
      paddingX={["42", "104px"]}
    >
      <GridItem>
        <Image marginX={["auto", "0"]} src={Logo} />
      </GridItem>
      <GridItem>
        <Heading
          marginTop={["42px", 0]}
          color={"secondary"}
          fontWeight={600}
          fontSize={18}
          lineHeight={"27.22px"}
          letterSpacing={"0.03em"}
          fontFamily={"Source Sans Pro"}
        >
          Contact Us
        </Heading>
        <Text
          width={["auto", "216px"]}
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"23px"}
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>

        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"23px"}
          marginY={"15px"}
        >
          example2020@gmail.com
        </Text>
        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"23px"}
        >
          (904) 443-0343
        </Text>
      </GridItem>
      <GridItem marginTop={["29px", "0"]}>
        <Heading
          color={"secondary"}
          fontWeight={600}
          fontSize={18}
          lineHeight={"30px"}
          letterSpacing={"0.03em"}
          fontFamily={"Source Sans Pro"}
        >
          More
        </Heading>
        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"27px"}
        >
          About Us
        </Text>
        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"27px"}
        >
          Products
        </Text>
        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"27px"}
        >
          Career
        </Text>
        <Text
          fontFamily={"Source Sans Pro"}
          color={"#646874"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"27px"}
        >
          Contact Us
        </Text>
      </GridItem>
      <GridItem>
        <Stack align={{ base: "center", md: "start" }}>
          <Heading
            display={['none', 'block']}
            color={"secondary"}
            fontWeight={600}
            fontSize={18}
            lineHeight={"27.22px"}
            letterSpacing={"0.03em"}
            fontFamily={"Source Sans Pro"}
          >
            Social Links
          </Heading>
          <Flex order={[2,1]} width={'32'} justifyContent={"space-between"}>
            <Instagram color={'#0E2368'}/>
            <Twitter color={'#0E2368'}/>
            <FacebookF color={'#0E2368'}/>
          </Flex>
          <Text
            order={[1,2]}
            fontFamily={"Source Sans Pro"}
            color={"#646874"}
            fontSize={"14px"}
            fontWeight={400}
            lineHeight={"23px"}
          >
            &copy; 2022 Food Truck Example
          </Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
