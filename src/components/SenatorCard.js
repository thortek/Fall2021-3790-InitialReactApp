import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import imagePlaceholder from './palpatine.png'

const SenatorCard = (props) => {
  const [favorite, setFavorite] = React.useState(false)
  const partyColor = props.senator.party === 'D' ? '#0000ff' : '#e71d36'

  const handleInfoClick = () => {
    props.modalFunction()
  }

  const handleFavoriteClick = () => {
    //console.log(props.senator.id)
    setFavorite(!favorite)
    props.addToFavoritesFunction(props.senator)
  }

  const handleImageError = (e) => {
    console.log('Got a bad image')
    e.target.onerror = null;
    e.target.src = imagePlaceholder
  }

  return (
    <Card
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        m: 1,
        border: 2,
        borderColor: partyColor,
        width: 120,
/*         '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        }, */
      }}
    >
      <CardMedia component='img' alt='Congress member' height='200'
      image={`https://www.govtrack.us/static/legislator-photos/${props.senator.govtrack_id}-100px.jpeg`}
      onError={handleImageError}/>
      <CardContent sx={{ p: '4px' }}>
        <Typography sx={{ fontSize: 14 }} color="success.dark" gutterBottom>
          {props.senator.first_name} {props.senator.last_name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ p: 0 }} onClick={handleInfoClick}>
          <PermIdentityIcon />
        </IconButton>
        <IconButton sx={{ p: 0, m: 0 }} onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: favorite ? '#F00' : '#000'}}/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default SenatorCard
