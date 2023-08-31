import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

const HouseDetails = () => {
  const [house, setHouse] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/razanhammad97/api-houses/houses/${id}`
    )
      .then(response => response.json())
      .then(data => setHouse(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  if (!house) {
    return <div>Loading...</div>
  }

  return (
    <div className='scontainer'>
      <div className='left-section section'>
        <h1
          style={{
            color: 'green'
          }}
        >
          House Information
        </h1>

        <div className='secondary-images'>
          <div className='secondary-section image1'></div>
          <div className='secondary-section image2'></div>
          <div className='secondary-section image3'></div>
        </div>

        <h2>House Location</h2>
        <p>{house.location}</p>
        <h2>House Title</h2>
        <p>{house.title}</p>
        <h2>House Description</h2>
        <p>{house.description}</p>
        <h4>House Price</h4>
        <p>{house.price} $</p>
        <h4>No. Of Bedrooms</h4>
        <p>{house.bedroom}</p>
        <h4>No. Of Baths</h4>
        <p>{house.baths}</p>
        <h4>Has a Gerden</h4>
        <p>{house.Garden}</p>
      </div>
      <div className='right-section section'>
        <div className='main-image'></div>
      </div>
    </div>
  )
}

export default HouseDetails
