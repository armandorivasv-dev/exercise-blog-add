import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import logo from '../assets/logo-oscuro-armandoweb-agency.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';

const category = [
  { title: 'All', link: '/' },
  { title: 'Javascript', link: 'category/1' },
  { title: 'HTML', link: 'category/2' },
  { title: 'CSS', link: 'category/3' }
];
console.log(category)


const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar disableGutters>
        <Link href="https://armandoweb.agency/" >
          <Box component="img" sx={{ width: 120, display: { xs: 'none', md: 'flex' } }} src={logo} />
        </Link>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {category.map((e) => (<Button key={e.title} href={e.link} color="inherit">{e.title}</Button>))}
            </Menu>
            <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <Button href='/login' color="inherit">Login</Button>
            </Box>
          </Box>

          <Link href="https://armandoweb.agency/">
            <Box component="img" sx={{ width: 100, mr: 1, display: { xs: 'flex', md: 'none' } }} src={logo} />
          </Link>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {category.map((e) => (<Button key={e.title} href={e.link} color="inherit">{e.title}</Button>))}
          </Box>

          <Box sx={{ justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            <Button href='/login' color="inherit">Login</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar