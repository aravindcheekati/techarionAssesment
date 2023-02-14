import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Counter from './Counter'
import Todo from './Todo'
import PostRequest from './PostRequest'
import NavBar from './NavBar'
import './App.css';

function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar/>} />
          <Route exact path="/counter" element={<Counter />}/>
          <Route exact path="/todolist" element={<Todo />} />
          <Route exact path="/post-request" element={<PostRequest />}  />
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
