import React from 'react';
import Button from '@mui/material/Button';

export const LoginButtons = ( { title, handleActionButton }) => {
  return (
    <Button 
      variant="outlined" 
      color="inherit" 
      onClick={handleActionButton} 
      fullWidth 
      disabled
    >
      {title}
    </Button>
  )
}
