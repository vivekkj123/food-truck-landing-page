import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import aboutusImage from "../../assets/about-us.jpg";

const AboutUS = () => {
  return (
    <Grid
      marginY={{
        base: "20",
        md: 0,
      }}
      paddingX={{ base: 12, md: 100 }}
      paddingY={{ base: 140, md: 0 }}
      templateColumns={{
        md: "0.45fr 0.55fr",
      }}
      background={
        "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
      }
    >
      <GridItem
        display={{
          base: "none",
          md: "block",
        }}
        width={"384px"}
        height={"468px"}
        backgroundImage={aboutusImage}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      />
      <GridItem margin={"auto"}>
        <Heading
          fontWeight={600}
          fontFamily={"Poppins"}
          fontSize={{
            base: "26px",
            md: "45px",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
          lineHeight={"27px"}
          color="secondary"
          my={10}
        >
          About Us
        </Heading>
        <Text
          color={"textSecondary"}
          width={{
            base: "100%",
            md: 447,
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
          fontFamily={"Open Sans"}
          fontWeight={400}
          lineHeight={{
            base: "21px",
            md: "27px",
          }}
          fontSize={{
            base: "11px",
            md: "15px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Stack align={{ base: "center", md: "start" }}>
          <Button
            paddingX={"8"}
            lineHeight={36}
            fontWeight={700}
            marginY={25}
            fontFamily={"Source Sans Pro"}
            borderRadius="34"
            color={"white"}
            backgroundColor={"primary"}
          >
            Read More
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default AboutUS;
