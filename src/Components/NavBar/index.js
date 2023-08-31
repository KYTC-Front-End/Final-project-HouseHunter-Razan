import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Login', path: '/login' },
  { label: 'Search', path: '/search' },
  { label: 'Sign Up', path: '/sign-up' },
  { label: 'About Us', path: '/about-us' }
]

function ResponsiveAppBar () {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const handleLogout = () => {
    // Clear the user data from local storage
    localStorage.removeItem('user')
    // Clear the user state
    setUser(null)
    // Navigate to the home page
    window.location.href = '/' // Reload the page to reflect logged out state
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              // Render "Login" and "Sign Up" links only if user is not logged in
              <React.Fragment key={page.label}>
                {page.label === 'Login' && !user ? (
                  <Button
                    component={Link}
                    to={page.path}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ) : null}
                {page.label === 'Sign Up' && !user ? (
                  <Button
                    component={Link}
                    to={page.path}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ) : null}
                {/* Render other links */}
                {page.label !== 'Login' && page.label !== 'Sign Up' ? (
                  <Button
                    component={Link}
                    to={page.path}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ) : null}
              </React.Fragment>
            ))}
            {/* Render profile button only for logged-in users */}
            {user ? (
              <Button
                component={Link}
                to='/profile'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Profile
              </Button>
            ) : null}
            {/* Render logout button if user is logged in */}
            {user ? (
              <Button
                onClick={handleLogout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
