import './App.css'
import Layout_Page from './pages/Layout_Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_Page from './pages/Login_Page'
import Register_Page from './pages/Register_Page'
import Auth_Page from './pages/Auth_Page'
import Olp_Layout_Page from './pages/Olp_Layout_Page'
import Admin_Layout_Page from './pages/Admin_Layout_Page'
import Admin_Home_Page from './pages/Admin_Home_Page'
import Admin_Student_Page from './pages/Admin_Student_Page'
import Admin_Lesson_Page from './pages/Admin_Lesson_Page'
import Admin_Setings_Page from './pages/Admin_Setings_Page'
import Lesson_Details_Page from './pages/Lesson_Details_Page'
import ResetPassword_Page from './pages/ResetPassword_Page'
import ProtectedRoute from './components/ProtectedRoute'
import Admin_Unlock_Page from './pages/Admin_Unlock_Page'
import Admin_Weekly_Page from './pages/Admin_Weekly_Page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout_Page/>}></Route>
          <Route path="/reset-password/:token" element={<ResetPassword_Page />}/>
          <Route path='/olp' element={<Auth_Page/>}>
            <Route path='/olp/login' element={<Login_Page/>}></Route>
            <Route path='/olp/register' element={<Register_Page/>}></Route>
            <Route path='/olp/home' element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Olp_Layout_Page/>
              </ProtectedRoute>
            }></Route>
            <Route path='/olp/home/lesson/:id' element={<Lesson_Details_Page/>}></Route>
            <Route path='/olp/admin' element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Admin_Layout_Page/>
              </ProtectedRoute>
            }>
              <Route index element={<Admin_Home_Page/>}></Route>
              <Route path='/olp/admin/students' element={<Admin_Student_Page/>}></Route>
              <Route path='/olp/admin/lessons' element={<Admin_Lesson_Page/>}></Route>
              <Route path='/olp/admin/settings' element={<Admin_Setings_Page/>}></Route>
              <Route path='/olp/admin/unlock' element={<Admin_Unlock_Page/>}></Route>
              <Route path='/olp/admin/weekly' element={<Admin_Weekly_Page/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
