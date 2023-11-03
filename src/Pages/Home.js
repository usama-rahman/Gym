import React from 'react'
// import  Box  from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SerchExercises from '../Components/SerchExercises'
import Exercises from '../Components/Exercises'
import { useState } from 'react'

const Home = () => {
   const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExcercises] = useState([])
  return (
    <div >
      < HeroBanner />
      < SerchExercises 
        setExcercises={setExcercises} 
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      < Exercises 
        exercises={exercises}
        setExcercises={setExcercises} 
        bodyPart={bodyPart}
      />
    </div> 
  )
}

export default Home