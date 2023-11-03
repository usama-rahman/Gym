// import React, { useState, useEffect } from 'react'
// import { Pagination } from '@mui/material/Pagination'
import { Box, Stack, Typography } from "@mui/material"
// import { exerciseOptions, fetchData } from "../utils/fatchData"

import ExerciseCard from './ExerciseCard'
 
const Excercises = ({ exercises }) => {
  console.log(exercises)
  return (
    <Box 
    id="exercise"
    sx= {{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Result
      </Typography>
      <Stack 
      diraction="row"
      sx={{
        gap: { lg: '110px', 
        xs: "50px"}
      }}
      flexWrap="wrap"
      justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise= {exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Excercises