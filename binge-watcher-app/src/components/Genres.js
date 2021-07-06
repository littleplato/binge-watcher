import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import genresList from "../utils/genresList";

let genreMedium = [...genresList.movie];
let IDsToPass = [];

const useStyles = makeStyles({
  question: {
    marginTop: 20,
  },
  checkboxes: {
    marginBottom: 10,
    display: "block",
  },
});

export default function Genres(props) {
  const classes = useStyles();

  const mediumRun = () => {
    if (props.medium === "movie") {
      genreMedium = [...genresList.movie];
    } else if (props.medium === "tv") {
      genreMedium = [...genresList.tv];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mediumRun();
    for (const genre of genreMedium) {
      if (event.target.elements[genre.key].checked) {
        IDsToPass = [...IDsToPass, ...genre.IDs];
      }
    }
    console.log(IDsToPass);
    props.handleGenre(IDsToPass);
  };

  const checkboxes = genreMedium.map((genre) => (
    <FormControlLabel
      name={genre.key}
      value={genre.IDs}
      control={<Checkbox />}
      label={genre.name}
    />
  ));

  return (
    <div>
      <Typography variant="h6" className={classes.question}>
        What kinds of shows do you like to watch?
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {checkboxes}
        <br />

        <Button
          className={classes.question}
          type="submit"
          variant="contained"
          color="primary"
          //   onClick={() => props.handleGenre()}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
