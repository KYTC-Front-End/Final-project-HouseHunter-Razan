import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import userImage from '../../utils/images/user.png'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'
import './style.css'

const Profile = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <>
      {user && (
        <p
          style={{
            textAlign: 'center',
            fontSize: '3vw',
            color: 'blue'
          }}
        >
          hello,{user.username}{' '}
        </p>
      )}

      <div className='container'>
        <div className='right-section section'>
          <div
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto',
              marginBottom: '1rem'
            }}
          >
            <img
              src={userImage}
              alt='User'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className='left-section section'>
          <div>
            <Button variant='contained' component={Link} to='/profile'>
              Profile
            </Button>
          </div>

          <div>
            <Button variant='contained' component={Link} to='/add-house'>
              Add House
            </Button>
          </div>

          <div>
            <Tooltip title='Coming Soon'>
              <Button
                disabled
                variant='contained'
                component={Link}
                to='/favorite-houses'
              >
                Favourite House List
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
