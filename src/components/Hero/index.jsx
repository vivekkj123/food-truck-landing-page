import {
  Button,
  calc,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import heroImage from "../../assets/hero-pizza.avif";
import blobImage from "../../assets/blob.svg";

const Hero = () => {
  return (
    <Grid
      gridTemplateColumns={{
        md: "repeat(2,1fr)",
      }}
    >
      <GridItem
        gridRow={{
          base: "2",
          md: "1",
        }}
        width={"100%"}
      >
        <Heading
          as={"h1"}
          fontFamily={"Source Sans Pro"}
          fontSize={{
            base: "38px",
            md: "6xl",
          }}
          width={{
            base: "auto",
            md: "345px",
          }}
          color="secondary"
          my={10}
        >
          Discover the
          <Text as={"span"} color="primary">
            {" "}
            Best
          </Text>{" "}
          Food and Drinks
        </Heading>
        <Text
          fontFamily={"Open Sans"}
          color={"textSecondary"}
          marginX={{
            base: "auto",
            md: "0",
          }}
          my={10}
          width={{
            base: "auto",
            md: "345px",
          }}
        >
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Button
          padding={"8"}
          fontWeight={700}
          fontFamily={"Open Sans"}
          borderRadius="34"
          color={"white"}
          backgroundColor={"primary"}
        >
          Explore Now
        </Button>
      </GridItem>
      <GridItem
        gridRow={{
          base: "1",
          md: "2",
        }}
        height={"md"}
      >
        <Image
          position={"absolute"}
          top={0}
          right={0}
          zIndex={-2}
          maxW={{
            base: "100%",
            md: "35%",
          }}
          maxH={"auto"}
          borderRadius={"0px 0px 0px 198.902px"}
          src={heroImage}
        />
        <Image
          position={"absolute"}
          top={0}
          right={0}
          zIndex={-1}
          maxWidth={"110%"}
          maxHeight={"70%"}
          src={blobImage}
        />
      </GridItem>
    </Grid>
  );
};

export default Hero;
