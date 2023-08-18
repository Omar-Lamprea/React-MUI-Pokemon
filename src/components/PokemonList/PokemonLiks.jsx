/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material"

const PokemonLiks = ({color}) => {
  return (
    <Box sx={{backgroundColor:`${color}.main`}}>
      <Container maxWidth="xl" sx={{p:3}}>
        <Typography variant="h5" sx={{mb:2}}>
          Most popular Pokémon
        </Typography>
        <Box>
          caja
        </Box>
      </Container>
    </Box>
  )
}

export default PokemonLiks