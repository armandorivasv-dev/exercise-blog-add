import './App.css';
import PostDetailContainer from './container/PostDetailContainer';
import PostListContainer from './container/PostListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">  
      <NavBar />
      <BrowserRouter>                   
          <Routes>
            <Route path='/' element={<PostListContainer  />}/>
            <Route path='/detail/:postId' element={<PostDetailContainer />}/>
            <Route path='/category/:categoryId' element={<PostListContainer  />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
