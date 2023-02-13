import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";

const ArticleCard = ({ title, description, image }) => {
  return (
    <Card
      py={8}
      rounded={"3xl"}
      border={"1.37039px solid rgba(147, 162, 211, 0.38);"}
    >
      <Image width={"80%"} mx={"auto"} src={image} />
      <CardHeader px={10}>
        <Heading
          fontFamily={"Poppins"}
          color={"secondary"}
          fontWeight={700}
          lineHeight={"27px"}
          size="md"
        >
          {title}
        </Heading>
      </CardHeader>
      <CardBody px={10}>
        <Text
          fontFamily={"Open Sans"}
          fontSize={"15px"}
          fontWeight={400}
          letterSpacing={"-0.02em"}
        >
          {description}
        </Text>
      </CardBody>
      <CardFooter px={10}>
        <Button
          background={"transparent"}
          borderColor={"textSecondary"}
          borderWidth={1}
          fontWeight={600}
          lineHeight={"36px"}
          letterSpacing={"0.03em"}
          fontFamily={"Source Sans Pro"}
          color={"textSecondary"}
          rounded={"full"}
          width={['full','fit-content']}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
