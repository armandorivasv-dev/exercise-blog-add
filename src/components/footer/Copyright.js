import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
  color: "#000",
  fontSize: 30,
};

const Copyright = () => {
  return (
    <Grid>
      <Grid container justifyContent="center" spacing={3} >
        <Grid item>
          <Link href="https://github.com/armandoweb-agency" target="_blank"><GitHubIcon style={iconStyle} /></Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/armandoweb-agency/" target="_blank"> <LinkedInIcon style={iconStyle} /></Link>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" target="_blank" href="https://armandoweb.agency/">
          armandoweb.agency
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Grid>
  )
}

export default Copyright;