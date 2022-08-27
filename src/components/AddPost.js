import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firestoreDb } from './firebase'
import { collection,  addDoc } from 'firebase/firestore';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import { Container } from '@mui/system';


const ariaLabel = { 'aria-label': 'description' };

const AddPost = () => {

  const [user, setUSer] = useState('')

  useEffect(() => {
    let autUser = sessionStorage.getItem('Auth Email')
    console.log(autUser)
    setUSer(autUser)

  }, [])

  let navigate = useNavigate();

  useEffect(() => {
    let autToken = sessionStorage.getItem('Auth Token')

    if (autToken) {
      navigate('/addpost')
    }
    if (!autToken) {
      navigate('/login')
    }

  }, [])


  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    category: '',
    author: '',
    content: '',
    date: new Date()
  })

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const collectionRef = collection(firestoreDb, 'posts')
    return addDoc(collectionRef, post)
  }

  const handleLogout = (e) => {
    sessionStorage.removeItem('Auth Token');
    sessionStorage.removeItem('Auth Email');
    navigate('/login')
  }


  return (
    <Container>
      <Box mt={5}>
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
          <Typography variant="caption" gutterBottom align="center">
            Hello, {user} -
          </Typography>
          <Link href="/login" onClick={handleLogout} variant="outlined"> logout</Link>
        </Box>

      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 5 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" gutterBottom align="center">
          FORM TO ADD POST
        </Typography>
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
        <Button type="submit" variant="outlined">SEND POST</Button>
      </Box>

    </Container>



  )
}

export default AddPost