import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'

export default function MediaCard ({ house }) {
  const { location, title, description, baths, price, Garden, bedroom } = house
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'
        title='green iguana'
      />
      <CardContent>
        <Typography variant='h5' color='text.primary'>
          Location: {location}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          House Title: {title}
        </Typography>
        <Typography gutterBottom variant='h6' component='div'>
          House Price: {price} $
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          # Baths: {baths} baths
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          # bedroom : {bedroom} bedroom/s
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          Has A Garden ? : {Garden}
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Details: {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Button size='small'>
          <Link to={`/house/${house.id}`}>view More</Link>
        </Button>
      </CardActions>
    </Card>
  )
}
