import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {firestoreDb} from './firebase'
import { collection, documentId, getDocs, query, where, addDoc, writeBatch } from 'firebase/firestore';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const ariaLabel = { 'aria-label': 'description' };

const AddPost = () => {


  const [ post, setPost ] = useState({
    title: '',
    subtitle: '',
    category: '',
    author: '',
    content: '',
    date: new Date()
  })

  console.log(post)

  const handleChange = (e) => {
    console.log(e.target.value)
    setPost({...post, [e.target.name]: e.target.value});
  };
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const collectionRef = collection(firestoreDb, 'posts')
    console.log(post)
    return addDoc(collectionRef, post)
  }


  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 5 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Title</InputLabel>
            <Input name="title" value={post.title} onChange={handleChange} inputProps={ariaLabel} />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Subtitle</InputLabel>
            <Input name="subtitle" value={post.subtitle} onChange={handleChange} inputProps={ariaLabel} />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Category</InputLabel>
            <Input name="category" value={post.category} onChange={handleChange} inputProps={ariaLabel} />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Author</InputLabel>
            <Input name="author" value={post.author} onChange={handleChange} inputProps={ariaLabel} />
          </FormControl>

        </Box>
        <Box sx={{
          '& > :not(style)': { m: 1, width: '120ch' },
        }}>

          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Content</InputLabel>
            <Input name="content" value={post.content} onChange={handleChange} inputProps={ariaLabel} multiline />
          </FormControl>

        </Box>
        <Button type="submit" variant="outlined">PUBLICAR POST</Button>
      </Box>

    </>



  )
}

export default AddPost