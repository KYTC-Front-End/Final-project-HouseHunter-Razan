import React, { useState, useEffect } from 'react'
import MediaCard from '../../Components/Cards'
import './style.css'
const HouseSearch = () => {
  const [houses, setHouses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [descriptionTerm, setDescriptionTerm] = useState('')
  const [filteredHouses, setFilteredHouses] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/razanhammad97/api-houses/houses')
      .then(response => response.json())
      .then(data => {
        setHouses(data)
        setFilteredHouses(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    const filtered = houses.filter(
      house =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        house.description.toLowerCase().includes(descriptionTerm.toLowerCase())
    )
    setFilteredHouses(filtered)
  }, [searchTerm, descriptionTerm, houses])

  return (
    <div>
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        House Search
      </h1>

      <div className='serach-inputs'>
        <div>
          <input
            style={{
              width: '50vw',
              marginBottom: '20px'
            }}
            type='text'
            placeholder='Search houses by name...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <input
            style={{
              width: '50vw'
            }}
            type='text'
            placeholder='Search houses by description...'
            value={descriptionTerm}
            onChange={e => setDescriptionTerm(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '20px',
          marginTop: '10px',
          fontWeight: 'bold'
        }}
      >
        {filteredHouses.length} Houses Found
      </div>
      <div className='search-results'>
        {filteredHouses.length > 0 ? (
          <div className='card-item'>
            {filteredHouses.map(house => (
              <MediaCard house={house} />
            ))}
          </div>
        ) : (
          <p>no results found</p>
        )}
      </div>
    </div>
  )
}

export default HouseSearch
