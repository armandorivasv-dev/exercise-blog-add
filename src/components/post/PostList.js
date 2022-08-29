import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { collection, query, where } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const PostList = () => {

  let postQuery = {}

  const { categoryId } = useParams()

  console.log(categoryId)

  const firetore = useFirestore()

  const postCollection = collection(firetore, 'posts')

  categoryId
    ? postQuery = query((postCollection), where("category", "==", categoryId))
    : postQuery = query(postCollection)

  const { status, data } = useFirestoreCollectionData(postQuery, {
    idField: 'id',
  })

  if (status === 'loading') {
    return <span>loading...</span>;
  }

  return (
    <Grid>
      <Typography
        component="h3"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom>
        {`CATEGORY: ${categoryId ? categoryId : 'ALL'}`}
      </Typography>
      <Grid container spacing={4}>
        {data.map((e) => (
          <Grid item key={e.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="345"
                image={e.image}
                alt={e.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CATEGORY: {e.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  AUTHOR: {e.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SUBTITLE: {e.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={`/detail/${e.id}`} color="inherit" variant="outlined">LEARN MORE</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default PostList;