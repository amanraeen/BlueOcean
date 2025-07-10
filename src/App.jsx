import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Post from './Pages/Post'
import Profile from './Pages/Profile'
import Message from './Pages/Message'
import Settings from './Pages/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/explore' element={<Explore/>} /> 
        <Route path='/message' element={<Message/>} /> 
        <Route path='/post' element={<Post/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/settings' element={<Settings/>} /> 
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
