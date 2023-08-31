import React, { useEffect, useState } from 'react'
import '../../Components/Button/style.css'
import MediaCard from '../../Components/Cards'
import './style.css'

const Home = () => {
  const [houses, setHouses] = useState([])
  const fetchData = () => {
    fetch('https://my-json-server.typicode.com/razanhammad97/api-houses/houses')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setHouses(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='hero-section image-container'>
        <div className='serach-field'>
          <p
            style={{
              fontSize: '40px',
              color: 'Green',
              fontWeight: 'bold',
              position: 'absolute'
            }}
          >
            Hunt your dreaming house 😃
          </p>
        </div>
      </div>
      <p
        style={{
          marginTop: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '30px'
        }}
      >
        {houses.length} Available Houses
      </p>
      <div className='card-item'>
        {houses.length > 0 && houses.map(house => <MediaCard house={house} />)}
      </div>
    </>
  )
}

export default Home
