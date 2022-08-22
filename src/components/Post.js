import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Post = ({ id, title, subtitle, author, category }) => {

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="345"
          image="https://via.placeholder.com/500/000000/FFFFFF/?text=POST IMAGE"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CATEGORY: {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AUTHOR: {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            SUBTITLE: {subtitle} 
          </Typography>
        </CardContent>
        <CardActions>
        <Button href={`/detail/${id}`} color="inherit" variant="outlined">LEARN MORE</Button> 
        </CardActions>
      </Card>
    </Grid>

  )
}

export default Post;