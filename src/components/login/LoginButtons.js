import React from 'react';
import Button from '@mui/material/Button';

export const LoginButtons = ( { title, handleActionButton }) => {
  return (
    <Button variant="contained" onClick={handleActionButton}>{title}</Button>
  )
}
