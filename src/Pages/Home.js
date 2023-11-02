// import React, { useState } from 'react'
import Box from "@mui/material"
import HeroBanner from '../Components/HeroBanner'
import SerchExercises from '../Components/SerchExercises'
import Excercises from '../Components/Excercises'

const Home = () => {
  return (
    <Box >
      < HeroBanner />
      < SerchExercises />
      < Excercises />
    </Box> 
  )
}

export default Home