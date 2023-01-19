import { Button, Checkbox, Grid, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SerachBar = () => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:"100%"}} />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:"100%"}}/>
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
          <Button variant="contained" sx={{height:"100%", width:"100%"}}>Search</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
