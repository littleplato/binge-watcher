import Medium from "../components/Medium";
import Genres from "../components/Genres";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Time from "../components/Time";

export default function Generate() {
  const [mediumSelection, setMediumSelection] = useState("show");
  const [genreSelection, setGenreSelection] = useState(null)
  const [timeSelection, setTimeSelection] = useState(0)

  const handleMedium = (input) => {
    input === "" ? alert("please select an option") : setMediumSelection(input);
    console.log("medium selected:", input);

  };

  const handleGenre = (input) => {
    console.log("geners passed:", input);
    setGenreSelection(input)
  };

  const handleTime = (input) => {
    console.log("medium selected:", mediumSelection)
    console.log("genre IDs:", genreSelection)
    console.log("time selected",  input, "hours")
    setTimeSelection(input)
  }

  return (
    <div>
      <Container>
        <Typography variant="h3">Generate Watchplan</Typography>
        {mediumSelection === "show" ? <Medium handleMedium={handleMedium} /> : ""}
        {mediumSelection !== "show" &&  genreSelection === null ? <Genres handleGenre={handleGenre}/> : ""}
        {genreSelection !== null && timeSelection === 0 ? <Time handleTime={handleTime} />: ""}

      </Container>
    </div>
  );
}
