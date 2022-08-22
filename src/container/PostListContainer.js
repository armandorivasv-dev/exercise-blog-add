import React from 'react';
import { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPostList } from '../service/Firestore';

const PostListContainer = () => {

  const [ post, setPost ] = useState([])

  const {categoryId} = useParams()

  useEffect(() =>{
    getPostList(categoryId)
      .then(post => {
        setPost(post)
      })

  }, [categoryId]);

  return (
    <Container>
      <PostList posts={post}/>
    </Container>
  )
}

export default PostListContainer;