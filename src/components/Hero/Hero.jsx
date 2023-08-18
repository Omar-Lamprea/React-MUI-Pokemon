/* eslint-disable react/prop-types */
import './Hero.scss'
import imgCharizard from '../../assets/pokemons/Charizard 3D.gif'
import { Box, Typography } from "@mui/material"


// eslint-disable-next-line no-unused-vars
const Hero = ({color}) => {
  let bg_color = color === "darkTheme" ? color : `${color}.customBlue`
  return (
    <Box className="Hero" sx={{
      backgroundColor:`${bg_color}`,
      display: {xs: "block", md:"flex"},
      justifyContent:"space-around",
      px:5
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
            textAlign: "center"
          }}
        >
          Be a <span>Pokémon</span> master<br /> Be the best
        </Typography>
      </Box>
      <Box>
        <img src={imgCharizard} alt="" width={500}/>
      </Box>
    </Box>
  )
}

export default Hero