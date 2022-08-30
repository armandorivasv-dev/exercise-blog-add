import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { LoginButtons } from './LoginButtons';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const LoginForm = ({ title, setEmail, setPassword, handleActionButton }) => {

  const [message, setMessage] = useState('')

  console.log(title)

  useEffect(() => {
    if (title === 'login') {
      setMessage(
        <Link to={`/register`} style={{ textDecoration: "none", color: "#000000" }}>
          <Button variant="outlined" color="inherit" fullWidth>
            Not user? Click to register
          </Button>
        </Link>
      )
    }
    if (title === 'register') {
      setMessage(
        <Link to={`/login`} style={{ textDecoration: "none", color: "#000000" }}>
          <Button variant="outlined" color="inherit" fullWidth>
            User? Click to login
          </Button>
        </Link>
      )
    }
  }, [title])

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secundary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h6" gutterBottom align="center" sx={{ textTransform: 'uppercase' }}>
          {title} Form
        </Typography>
        <Box
          component="form"
          sx={{ m: 1, width: '40ch' }}
          noValidate
          autoComplete="on"
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Enter email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Enter password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <LoginButtons
              title={title}
              handleActionButton={handleActionButton}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            {message}
          </Box>
        </Box>
      </Box>
    </Container>

  )
}

export default LoginForm;