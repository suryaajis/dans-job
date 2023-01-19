import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <span style={{fontWeight:"bold", fontFamily:"fantasy"}}>Github</span>Jobs
          </Typography>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
  )
}
