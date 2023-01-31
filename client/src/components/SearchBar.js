import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getListJobs } from "../app/reducers/jobSlice";

export const SearchBar = (props) => {
  // const dispatch = useDispatch()

  const [checked, setChecked] = useState(true);
  const [desc, setDesc] = useState("")
  const [loc, setLoc] = useState("")

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField id="outlined-basic" value={desc} onChange={(event) => setDesc(event.target.value)} name="description" label="Job Description" variant="outlined" sx={{width:"100%"}} />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" value={loc} onChange={(event) => setLoc(event.target.value)} name="location" label="Location" variant="outlined" sx={{width:"100%"}}/>
        </Grid>
        <Grid item xs={2} sx={{display:"flex", justifyContent: "center", alignItems:"center"}}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography sx={{fontWeight:"bold"}}>Full Time Only</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={(event) => props.handleSearch(event, {desc, loc, checked})} variant="contained" sx={{height:"100%", width:"100%"}}>Search</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
