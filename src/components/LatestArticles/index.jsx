import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleCard from "../ArticleCard";
import Image1 from "../../assets/grilled-tomatoes.jpg";
import Image2 from "../../assets/meal-prep-ideas-846x846 1.jpg";
import Image3 from "../../assets/meal-prep-ideas-846x846 1-1.jpg";
import Image4 from "../../assets/grilled-tomatoes-1-846x846 1.jpg";
import Image5 from "../../assets/meal-prep-ideas-846x846 1-2.jpg";
import Image6 from "../../assets/meal-prep-ideas-846x846 1-3.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const LatestArticles = () => {
  const [Page, setPage] = useState(1);
  const LatestPosts = [
    {
      title: "Grilled  Tomatoes at Home",
      image: Image1,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      title: "Snacks for Travel",
      image: Image2,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      title: "Post-workout Recipes",
      image: Image3,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      title: "How To Grill Corn",
      image: Image4,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      title: "Crunchwrap Supreme",
      image: Image5,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      title: "Broccoli Cheese Soup",
      image: Image6,
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];
  let noOfPages = Math.ceil(LatestPosts.length / 3);
  return (
    <Box paddingX={"35px"} paddingY={["20px", "158px"]}>
      <Text
        fontWeight={600}
        fontFamily={"Source Sans Pro"}
        fontSize={{
          base: "28px",
          md: "56px",
        }}
        textAlign={{
          base: "center",
          md: "left",
        }}
        lineHeight={{
          base: " 54px",
          md: "42px",
        }}
        color="secondary"
        my={10}
        letterSpacing={"0.04em"}
      >
        Latest Articles{" "}
      </Text>
      <SimpleGrid
        spacing={8}
        templateColumns={{
          sm: "repeat(auto-fill, 1fr)",
          md: "repeat(auto-fill, minmax(28%, 1fr))",
        }}
      >
        {LatestPosts.splice((Page - 1) * 3, 3).map((article) => (
          <ArticleCard
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </SimpleGrid>
        <Flex marginTop={20} gap={4} justifyContent={'center'} alignItems='center'>
          <IconButton
            backgroundColor={"transparent"}
            borderWidth={1}
            borderColor={"#424961"}
            icon={<ChevronLeftIcon />}
            isDisabled={Page == 1}
            onClick={() => {
              setPage(Page - 1);
            }}
          >
            Prev
          </IconButton>
          <Text>
            {Page} / {noOfPages}
          </Text>
          <IconButton
            backgroundColor={"transparent"}
            borderWidth={1}
            borderColor={"#424961"}
            icon={<ChevronRightIcon />}
            isDisabled={Page == noOfPages}
            onClick={() => setPage(Page + 1)}
          >
            Next
          </IconButton>
        </Flex>
    </Box>
  );
};

export default LatestArticles;
