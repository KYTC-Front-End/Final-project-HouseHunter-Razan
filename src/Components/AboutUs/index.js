import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './style.css'

const AboutUs = () => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          fontSize: '25px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}
      >
        How our site Works
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '20px',
          marginBottom: '10px'
        }}
      >
        If you dream to find your dreaming house, you reach your goal by
        visiting our site.
        <br></br>
        Go ahead and start searching for your house depending on your
        capabilities.
      </div>
      <div class='about-image'></div>
      <div className='button-container'>
        <Button variant='outlined' component={Link} to='/search'>
          Go to search and find your dreaming house 😍
        </Button>
      </div>
    </>
  )
}

export default AboutUs
