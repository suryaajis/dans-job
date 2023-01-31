import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Footer } from "../components/Footer";
import { ListItemJob } from "../components/ListItem";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";

const Home = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let URL = `http://localhost:5000/jobs`
    
        const { data } = await axios({
          url: URL,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
    
        setList(data)
      } catch (err) {
        console.log(err, "ue")
      }
    })()
  }, []);

  const handleSearch = async (event, {desc, loc, checked}) => {
    try {
      event.preventDefault()

      let URL = `http://localhost:5000/jobs?`

      if (desc) URL += `description=${desc}`
      if (loc) URL += `location=${loc}`
      // if (checked) URL += `full_time=${checked}`

      const { data } = await axios({
        url: URL,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })

      console.log(data)
      setList(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <SearchBar handleSearch={handleSearch} />
        <ListItemJob list={list} />
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
