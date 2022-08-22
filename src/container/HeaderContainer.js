// import { Container } from '@mui/system';
// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import PostListContainer from './PostListContainer';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { useParams } from 'react-router-dom';



// const HeaderContainer = () => {


//   const { categoryId } = useParams(); 

//   console.log(categoryId)


//   return (
//     <>
//         <Container>
//             <Box
//         sx={{
//           bgcolor: 'background.paper',
//           pt: 1,
//           pb: 1,
//           mt: 2,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Typography
//             component="h1"
//             variant="h2"
//             align="center"
//             color="text.primary"
//             gutterBottom
//           >
//             BLOG POST
//           </Typography>
//           <Typography variant="h5" align="center" color="text.secondary" paragraph>
//             LIST CATEGORIES
//           </Typography>
//             <Stack spacing={2} direction="row">
//             <Button href="/" color="inherit" variant="outlined">ALL CATEGORY</Button> 
//             <Button href="/category1" color="inherit" variant="outlined">CATEGORY#1</Button>   
//             <Button href="/category2" color="inherit" variant="outlined">CATEGORY#2</Button> 
//             <Button href="/category3" color="inherit" variant="outlined">CATEGORY#3</Button>   

//             </Stack>     
//           </Container>
     
        
//       </Box>
      
     
//     </Container>

   

//     </>

//   )
// }

// export default HeaderContainer;