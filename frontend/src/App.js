import {Route,BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from "./components/Pages/navbar";
import Register from "./components/Pages/register";
import Login from "./components/Pages/login";
import NewPost from './pages/newPost';
import CreateProfile from './pages/createProfile'
import PostCard from "./pages/postCard";
import ProfilePage from './pages/showProfile'
import { Divide } from 'lucide-react';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {
  return (
    <div>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<PostCard/>}/>
    <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/createprofile' element={ <ProtectedRoute> <CreateProfile/> </ProtectedRoute>}/>
       <Route path='/newpost' element={<ProtectedRoute> <NewPost/> </ProtectedRoute>}/>
        <Route path='/profile' element={ <ProtectedRoute> <ProfilePage/> </ProtectedRoute> }/>
  </Routes>
</Router>
    </div>
  )
}

export default App;
