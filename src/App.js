import './App.css';
import PostDetailContainer from './container/PostDetailContainer';
import PostListContainer from './container/PostListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <div className="App">  
      <FirestoreProvider sdk={firestoreInstance}>
      <NavBar />
        <BrowserRouter>                   
            <Routes>
              <Route path='/' element={<PostListContainer  />}/>
              <Route path='/detail/:postId' element={<PostDetailContainer />}/>
              <Route path='/category/:categoryId' element={<PostListContainer  />}/>
            </Routes>
        </BrowserRouter>
      </FirestoreProvider>
    </div>
  );
}

export default App;
