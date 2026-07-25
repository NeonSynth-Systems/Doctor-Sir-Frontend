import './App.css'
import Layout_Page from './pages/Layout_Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_Page from './pages/Login_Page'
import Register_Page from './pages/Register_Page'
import Auth_Page from './pages/Auth_Page'
import Olp_Home_Page from './pages/Olp_Home_Page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout_Page/>}></Route>
          <Route path='/olp' element={<Auth_Page/>}>
            <Route path='/olp/login' element={<Login_Page/>}></Route>
            <Route path='/olp/register' element={<Register_Page/>}></Route>
            <Route path='/olp/home' element={<Olp_Home_Page/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
