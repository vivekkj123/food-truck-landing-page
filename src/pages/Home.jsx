import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box display={'block'} paddingX={{ base: 5, md: 20 }}>
      <Navbar />
      <Hero />
    </Box>
  );
};

export default Home;
