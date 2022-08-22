import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const PostDetail = ({ post }) => {

  return (
    <Grid item key={post.id} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 645 }}>
        <CardMedia
          component="img"
          height="345"
          image="https://via.placeholder.com/500/000000/FFFFFF/?text=POST IMAGE"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={`/`} color="inherit" variant="outlined">BLACK TO BLOG</Button> 
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PostDetail;