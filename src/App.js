import './App.css';
import PostDetailContainer from './container/PostDetailContainer';
import PostListContainer from './container/PostListContainer';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import AddPost from './components/AddPost';
import LoginForm from './components/login/LoginForm';
import { useEffect, useState } from 'react';
//login
import { app } from './components/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginActions } from './components/login/LoginActions';

function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  // } 

  // useEffect(()=>{
  //   let authToken = sessionStorage.getItem('Auth Token')
  //   if (authToken) {
  //     navigate('/addpost')
  //   }

  // },[])

    // end form

  return (
    <div className="App">  
      <FirestoreProvider sdk={firestoreInstance}>
      <NavBar />
            <Routes>
              <Route path='/' element={<PostListContainer  />}/>
              <Route path='/login' element={<LoginActions title='login' />} />
              <Route path='/register' element={<LoginActions title='register'/>}/> 
              <Route path='/addpost' element={<AddPost  />}/>              
              <Route path='/detail/:postId' element={<PostDetailContainer />}/>
              <Route path='/category/:categoryId' element={<PostListContainer  />}/>              
            </Routes>
      </FirestoreProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
