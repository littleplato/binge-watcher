import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import genresList from "../utils/genresList";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

let genreMedium = [...genresList.movie];
let IDsToPass = "";

const useStyles = makeStyles({
  question: {
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxes: {
    marginTop: 20,
  },
  btn : {
    marginTop: 20,
    marginLeft: 138,
  }
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
    console.log(IDsToPass === "");
    props.handleGenre(IDsToPass)
  };

  const checkboxes = genreMedium.map((genre) => (
    <FormControlLabel
      name={genre.key}
      value={genre.IDs}
      control={<Checkbox color="primary"/>}
      label={genre.name}
    />
  ));

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "60vh" }}
    >
      <Fade in={true} timeout={1000}>
      <Typography variant="h6" className={classes.question}>
        What kinds of shows do you like to watch?
      </Typography>
      </Fade>

      <Fade in={true} timeout={1000}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{alignItems: 'center'}}>
        {checkboxes}
        <br />

        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </form>
      </Fade>
      <Fade in={true} timeout={1000}>
      <Typography variant="body2" className={classes.question}>
          2/3
        </Typography>
        </Fade>
    </Grid>
  );
}
