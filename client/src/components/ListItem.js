import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJobs } from "../app/reducers/jobSlice";


export const ListItemJob = () => {
  const dispatch = useDispatch()
  const { listJobs } = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getListJobs())
  }, [dispatch])

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          flexGrow: 1,
          padding: "2vh",
          borderRadius: "5px",
          border: "1px solid #1976d2",
          paddingBottom: "20px"
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "36px" }}>
          Job List
        </Typography>
        {listJobs?.map(item => {
          return (
            <Grid key={item.id} spacing={2} container sx={{ padding: "10px", borderRadius: "5px" }}>
              <Grid item xs={2}>
                <p>{item.title}</p>
              </Grid>
              <Grid item xs={8}>
                <p
                  style={{
                    overflow: "hidden",
                    width: "50vw",
                    height: "25vh"
                  }}
                >{item.description}
                </p>
              </Grid>
              <Grid item xs={2} >
                <p>{item.company}</p>
                <p>{item.created_at}</p>
              </Grid>

            </Grid>
          )
        })}
      </Box>
    </Container>
  );
};
