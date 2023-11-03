import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography} from "@mui/material"
import { excerciseOption, fatchData } from '../utils/fatchData'

const SerchExercises = () => {

  const [search, setSearch] = useState('')

  const handelSearch = async () => {
    if(search){
      const excercisesData = await fatchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', excerciseOption);
      console.log(excercisesData)
    }
  }

  return (
    <Stack
      alignItems='center'
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px'
          }
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br/> Should know
      </Typography>
      <Box
      position="relative"
      mb="72px"
      >
        <TextField
        sx={{
          input: { 
            fontWeight : "700",
            border: "none",
            borderRadius: "4px"
          },
          width: { 
            lg: "800px",
            xs: "350px",
          },
          backgroundColor: "#fff",
          borderRadius : "40px"
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Excersice'
          type='text'
        />
        <Button
         className="search-btn"
         sx={{
          bgcolor: '#FF2625',
          color: "#fff",
          textTransform: 'none',
          width: {
            lg: '175px',
            xs: '80px'
          },
          fontSize: {
            lg: "20px",
            xs: "14px"
          },
          height: "56px",
          position: "absolute",
          right: '0'
         }}
         onClick={handelSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
    )
}

export default SerchExercises