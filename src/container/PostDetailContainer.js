import React from 'react';
import { Container } from '@mui/material';
import PostDetail from '../components/post/PostDetail';


const PostDetailContainer = () => {

  return (
    <Container sx={{ mt: 5 }}>
      <PostDetail/> 
    </Container>    
  )
}

export default PostDetailContainer;