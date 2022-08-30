import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import logo from '../assets/logo-oscuro-armandoweb-agency.png';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';

const category = [
  { title: 'All', link: '/' },
  { title: 'Javascript', link: '/category/javascript' },
  { title: 'HTML', link: '/category/html' },
  { title: 'CSS', link: '/category/css' }
];

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
          <Link to="https://armandoweb.agency/" >
            <Box component="img" sx={{ width: 120, display: { xs: 'none', md: 'flex' } }} src={logo} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="link armandoweb.agency"
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
              {category.map((e) => (<Button key={e.title} variant="outlined" size="small"><NavLink to={e.link} color="inherit">{e.title}</NavLink></Button>))}
            </Menu>
            <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <IconButton
                size="large"
                aria-label="login icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link to="/login">
                  <AccountCircle />
                </Link>
              </IconButton>
            </Box>
          </Box>
          <Link to="https://armandoweb.agency/">
            <Box component="img" sx={{ width: 100, mr: 1, display: { xs: 'flex', md: 'none' } }} src={logo} />
          </Link>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {category.map((e) => (<Button key={e.title}><NavLink to={e.link} style={{ textDecoration: "none" }}> {e.title} </NavLink></Button>))}
          </Box>
          <Box sx={{ justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="login icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Link to="/login">
                <AccountCircle />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar