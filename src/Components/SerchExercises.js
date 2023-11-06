import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { excerciseOptions, fatchData } from "../utils/fatchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
// 23e72b5cc4mshcfc2f25bd230361p130c10jsn5010dda240e3
const SerchExercises = ({ setExcercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartsData = await fatchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExcercisesData();
  }, []);

  const handelSearch = async () => {
    if (search) {
      const excercisesData = await fatchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );

      const searchedExercises = excercisesData.filter(
        (exercise) =>
          exercise.name.toLowercase().includes(search) ||
          exercise.target.toLowercase().includes(search) ||
          exercise.equipment.toLowercase().includes(search) ||
          exercise.bodyPart.toLowercase().includes(search)
      );
      setSearch("");
      setExcercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br /> Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Excersice"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handelSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          data={bodyParts}
        />
      </Box>
    </Stack>
  );
};

export default SerchExercises;
