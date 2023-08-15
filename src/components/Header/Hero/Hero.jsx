/* eslint-disable react/prop-types */
import './Hero.scss'
import imgCharizard from '../../../assets/pokemons/Charizard 3D.gif'
import { Box, Typography } from "@mui/material"


const Hero = ({color}) => {
  return (
    <Box className="Hero" sx={{
      display: {xs: "block", md:"flex"},
      justifyContent:"space-around",
      px:10
    }}>
      <Box sx={{
        display:"flex",
        alignItems:"center", 
        maxWidth:"500px", 
        textAlign:{xs: "canter", md:"start"},
        m:"auto"
      }}>
        <Typography 
          component="h2"
          sx={{
            fontSize: "38px",

          }}
        >
          Se un maestro <span>Pokemon</span> y hazte con todos los pokemones del mundo
        </Typography>
      </Box>
      <Box>
        <img src={imgCharizard} alt="" width={500}/>
      </Box>
    </Box>
  )
}

export default Hero