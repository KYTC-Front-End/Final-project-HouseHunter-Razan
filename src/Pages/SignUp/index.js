import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Components/Signin/style.css'

const SignUpForm = () => {
  const [errorMessages, setErrorMessages] = useState({})
  const errors = {
    uname: 'invalid username',
    pass: 'invalid password'
  }
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Replace with your API endpoint
    const apiEndpoint =
      'https://my-json-server.typicode.com/RazanHammad97/api-users-house-hunter/'

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        navigate('/profile')
        // Handle success or show messages to the user
        console.log('Sign-up successful:', data)
      })
      .catch(error => {
        console.error('Error signing up:', error)
      })
  }

  return (
    <div class='app'>
      <div className='login-form'>
        <div className='title'>Sign Up</div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='input-container'>
            <label>Username </label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-container'>
            <label>Email: </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-container'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='button-container'>
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
