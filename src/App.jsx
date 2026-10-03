import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './context/auth'
import Layout from './Layout'
import Landing from './component/Landing'
import Content from './component/Content'
import Movies from './component/Movies'
import MovieDetails from './component/MovieDetails'
import Celebrities from './component/Celebrities'
import Community from './component/Community'
import Watchlist from './component/Watchlist'
import Help from './component/Help'
import Login from './component/Login'
import Signup from './component/Signup'
import PageNotFound from './component/PageNotFound'
import ProtectedRoute from './component/ProtectedRoute'
import PublicOnlyRoute from './component/PublicOnlyRoute'

// Shows Content if logged in, Landing if not logged in
function RootRoute() {
  const { user } = useAuth()
  return user ? <Content /> : <Landing />
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Root Route: Landing for guests, Content for members */}
            <Route index element={<RootRoute />} />
            <Route path="/welcome" element={<Landing />} />

            {/* Public Auth Routes (redirect to /Content if already logged in) */}
            <Route element={<PublicOnlyRoute />}>
              <Route path="/Login" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Public Information Route */}
            <Route path="/Help" element={<Help />} />
            <Route path="/help" element={<Help />} />

            {/* Protected Routes (Require Authentication) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/Content" element={<Content />} />
              <Route path="/content" element={<Content />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/Celebrities" element={<Celebrities />} />
              <Route path="/celebrities" element={<Celebrities />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/community" element={<Community />} />
              <Route path="/Watchlist" element={<Watchlist />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Route>
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
