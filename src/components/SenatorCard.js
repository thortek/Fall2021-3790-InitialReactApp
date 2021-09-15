import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

const SenatorCard = (props) => {
  /* const { firstName, lastName, id } = props */

  const handleInfoClick = () => {
    console.log('Thanks for clicking!')
    props.modalFunction()
  }

  return (
    <Card
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 168,
        height: 120,
        m: 1,
/*         '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        }, */
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="success.dark" gutterBottom>
          {props.senator.first_name} {props.senator.last_name}
        </Typography>
        <Typography variant="h6" component="div"></Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ p: 0 }} onClick={handleInfoClick}>
          <PermIdentityIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default SenatorCard
