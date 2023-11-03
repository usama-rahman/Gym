import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography} from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <link
    className='exercise-card'
    to={`/exercise/${exercise.id}`}
    >
    <img 
    src={exercise.gifUrl}
    alt={exercise.name}
    loading="lazy"
    />

    <Stack diraction="row">
        <Button></Button>
    </Stack>
    </link>
  )
}

export default ExerciseCard