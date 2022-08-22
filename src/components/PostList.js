import React from 'react';
import Post from '../components/Post';
import Grid from '@mui/material/Grid';


const PostList = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((e) => (<Post key={e.title} {...e} />))}
    </Grid>

  )
}

export default PostList;