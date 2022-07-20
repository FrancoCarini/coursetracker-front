import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Landing from './pages/Landing'
import Error from './pages/Error'
import Register from './pages/Register'
import AllCourses from './pages/dashboard/AllCourses'
import AddCourse from './pages/dashboard/AddCourse'
import Profile from './pages/dashboard/Profile'
import Stats from './pages/dashboard/Stats'
import SharedLayout from './pages/dashboard/SharedLayout'
import ProtectedRoute from './components/ProtectedRoute'
import PersistLogin from './components/PersistLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-courses" element={<AllCourses />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
