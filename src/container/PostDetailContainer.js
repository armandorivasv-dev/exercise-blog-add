import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import PostDetail from '../components/PostDetail';
import { useParams } from 'react-router-dom';
import { getPost } from '../service/Firestore'

const PostDetailContainer = () => {

  const [ post, setPost ] = useState([])

  const { postId } = useParams()

  useEffect(() =>{
    getPost(postId)
      .then(post => {
        setPost(post)
      })

  }, [postId]);

  return (
    <Container>
      <PostDetail post={post} />
    </Container>    
  )
}

export default PostDetailContainer;