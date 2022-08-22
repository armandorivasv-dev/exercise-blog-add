import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BLOG POST APP
        </Typography>

        <Stack spacing={2} direction="row">
            <Button href="/" color="inherit" variant="outlined">ALL CATEGORY</Button> 
            <Button href="/category/1" color="inherit" variant="outlined">CATEGORY#1</Button>   
            <Button href="/category/2" color="inherit" variant="outlined">CATEGORY#2</Button> 
            <Button href="/category/3" color="inherit" variant="outlined">CATEGORY#3</Button>   
        </Stack> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar