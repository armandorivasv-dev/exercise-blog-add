import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { LoginButtons } from './LoginButtons';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';

const LoginForm = ( { title, setEmail, setPassword, handleActionButton }) => {


  const [ message, setMessage ] = useState('')

  useEffect(()=>{
    if ( title === 'login'){
      setMessage(<Button href="/register" variant="contained">Not user? Click to register</Button> )

    }
    if ( title === 'register'){
      setMessage(<Button href="/login" variant="contained">User? Click to login</Button> )

    }

  },[])

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
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h6" gutterBottom align="center">
          {title} Form
        </Typography>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField id="email" label="Enter email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          <TextField id="password" label="Enter password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <LoginButtons title={title} handleActionButton={handleActionButton} />
          {message}
        </Box>      


      </Box>
     



    </Container>

  )
}

export default LoginForm;