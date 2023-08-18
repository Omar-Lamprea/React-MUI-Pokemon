/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"

const Footer = ({color}) => {
  return (

      <Box sx={{backgroundColor:`${color}.header`, textAlign:"center", p:2}}>
        <Typography sx={{color:`#fff`}}>
          Design with ❤️‍🩹 by Omar Lamprea
        </Typography>
      </Box>
  )
}

export default Footer