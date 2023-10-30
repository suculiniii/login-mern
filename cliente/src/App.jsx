import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import { AuthProvider } from './context/AuthContext'
import TaskPage from './page/TaskPage'
import RegisterPage from './page/registerPage'
import TaskFormPage from './page/TaskFormPage'
import HomePage from './page/HomePage'
import ProfilePage from './page/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { TasksProvider } from './context/TaskContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <TasksProvider>
        <BrowserRouter>
            <Routes>  
              <Route path='/' element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>

              <Route element={ <ProtectedRoute/> }>
                <Route path='/tasks' element={<TaskPage/>}/>
                <Route path='/add-task' element={<TaskFormPage/>}/>
                <Route path='/task/:id' element={<TaskFormPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
        </TasksProvider>
      </AuthProvider>
   
    </div>
  )
}

export default App
