import { Box } from "@chakra-ui/react";
import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box display={"block"}>
      <Box paddingX={{ base: 5, md: 20 }}>
        <Navbar />
        <Hero />
      </Box>
      <AboutUs />
      <Box paddingX={{ base: 5, md: 20 }}>
        <LatestArticles />
      </Box>
      <Footer/>
    </Box>
  );
};

export default Home;
