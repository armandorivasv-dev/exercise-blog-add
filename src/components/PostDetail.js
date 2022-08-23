import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { doc } from 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';


const PostDetail = () => {

  const { postId } = useParams()

  const postRef = doc(useFirestore(), 'posts', postId);
  
  const { status, data } = useFirestoreDocData(postRef)

  if (status === 'loading') {
      return <p>Fetching...</p>;
    }

  return (
    <Grid container>
      <Grid item key={data.id} xs={12} sm={12} md={12}>
      <Card sx={{ maxWidth: 1260 }}>
        <CardMedia
          component="img"
          height="345"
          image="https://picsum.photos/1200"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={`/`} color="inherit" variant="outlined">BLACK TO BLOG</Button> 
        </CardActions>
      </Card>
    </Grid>

    </Grid>

  )
}

export default PostDetail;