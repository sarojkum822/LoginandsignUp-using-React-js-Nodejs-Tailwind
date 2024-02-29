import React from 'react'
import Login from './component/login.jsx'
import Signup from './component/signup.jsx'
import Home from './component/Home.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>  

      
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
