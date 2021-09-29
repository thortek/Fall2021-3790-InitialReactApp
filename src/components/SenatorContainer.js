import * as React from 'react'
import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const SenatorContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [favorites, setFavorites] = React.useState([])
  const [senatorList, setSenatorList] = React.useState([])

  React.useEffect(() => {
    const fetchSenatorList = async () => {
      console.log('I want to call my api now')
      try {
        const response = await axios.get('/senate')
        console.log(response.data.results[0].members)
        setSenatorList(response.data.results[0].members)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSenatorList()
  }, [])

  const addToFavorites = (senator) => {
    console.log(`${senator} was clicked to add to favorites`)
    if (!favorites.includes(senator.id)) {
      // not currently a favorite, so add it
      setFavorites((prevState) => [...prevState, senator.id])
    } else {
      setFavorites(() => {
        // duplicate so filter and return new array
        return favorites.filter((item) => item !== senator.id)
      })
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {senatorList.map((senator) => {
        return (
          <SenatorCard
            key={senator.id}
            addToFavoritesFunction={addToFavorites}
            modalFunction={handleOpen}
            senator={{ ...senator }}
          />
        )
      })}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Senator Information</Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default SenatorContainer
