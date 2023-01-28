import { Container } from "@mui/material";
import React, { useEffect } from "react";
// import { Footer } from "../components/Footer";
import { ListItemJob } from "../components/ListItem";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl" sx={{mt:6}}>
        <SearchBar />
        <ListItemJob />
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
