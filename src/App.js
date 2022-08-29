import './App.css';
import PostDetailContainer from './container/PostDetailContainer';
import PostListContainer from './container/PostListContainer';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import AddPost from './components/post/AddPost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginActions } from './components/login/LoginActions';
import Footer from './components/footer/Footer';

function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <div className="App">  
      <FirestoreProvider sdk={firestoreInstance}>
      <NavBar />
            <Routes>
              <Route path='/' element={<PostListContainer  />}/>
              <Route path='/Login' element={<LoginActions title='login' />} />
              <Route path='/Register' element={<LoginActions title='register'/>}/> 
              <Route path='/addpost' element={<AddPost  />}/>              
              <Route path='/detail/:postId' element={<PostDetailContainer />}/>
              <Route path='/category/:categoryId' element={<PostListContainer  />}/>              
            </Routes>
      <Footer />
      </FirestoreProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
