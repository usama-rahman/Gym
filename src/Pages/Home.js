import React from 'react'
// import  Box  from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SerchExercises from '../Components/SerchExercises'
import Excercises from '../Components/Excercises'
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
      < Excercises 
        setExcercises={setExcercises} 
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div> 
  )
}

export default Home