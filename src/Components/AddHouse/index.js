import React, { useState } from 'react'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AddHouseForm = () => {
  const [houseTitle, setHouseTitle] = useState('')
  const [houseLocation, setHouseLocation] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [baths, setBaths] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [hasGarden, setHasGarden] = useState('')
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const newHouseData = {
      houseTitle,
      houseLocation,
      price,
      description,
      baths,
      bedrooms,
      hasGarden: hasGarden === 'yes'
    }

    // Replace with your API endpoint
    const apiEndpoint =
      'https://my-json-server.typicode.com/RazanHammad97/api-users-house-hunter/'

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHouseData)
    })
      .then(response => response.json())
      .then(data => {
        navigate('/profile')
        // Handle success or show messages to the user
        console.log('House Added Successfully:', data)
      })
      .catch(error => {
        console.error('Error Adding a new house:', error)
      })
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      <form
        sonSubmit={handleSubmit}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <TextField
          label='House Title'
          value={houseTitle}
          onChange={e => setHouseTitle(e.target.value)}
          required
        />
        <FormControl>
          <InputLabel>House Location</InputLabel>
          <Select
            value={houseLocation}
            onChange={e => setHouseLocation(e.target.value)}
            required
          >
            <MenuItem value='Gaza'>Gaza</MenuItem>
            <MenuItem value='Rafah'>Rafah</MenuItem>
            <MenuItem value='Khanyounis'>Khanyounis</MenuItem>
            {/* Add more location options */}
          </Select>
        </FormControl>
        <TextField
          label='Price'
          type='number'
          inputProps={{ min: 50 }}
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <TextField
          label='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <TextField
          label='Number of Baths'
          value={baths}
          onChange={e => setBaths(e.target.value)}
          type='number'
          inputProps={{ min: 0 }}
          required
        />
        <TextField
          label='Number of Bedrooms'
          value={bedrooms}
          type='number'
          inputProps={{ min: 0 }}
          onChange={e => setBedrooms(e.target.value)}
          required
        />
        <FormControl component='fieldset'>
          <RadioGroup
            value={hasGarden}
            onChange={e => setHasGarden(e.target.value)}
          >
            <FormControlLabel
              value='yes'
              control={<Radio />}
              label='Has Garden'
            />
            <FormControlLabel
              value='no'
              control={<Radio />}
              label='No Garden'
            />
          </RadioGroup>
        </FormControl>
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddHouseForm
