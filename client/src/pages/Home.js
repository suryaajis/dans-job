import { Container } from "@mui/material";
import React, { useEffect } from "react";
// import { Footer } from "../components/Footer";
import { ListItemJob } from "../components/ListItem";
import { Navbar } from "../components/Navbar";
import { SerachBar } from "../components/SerachBar";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl" sx={{mt:6}}>
        <SerachBar />
        <ListItemJob />
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
