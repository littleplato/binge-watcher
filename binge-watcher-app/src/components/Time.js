import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

const timings = {
  movie: {
    unit: "hours",
    default: 15,
    step: 5,
    min: 5,
    max: 40,
  },
  tv: {
    unit: "days",
    default: 3,
    step: 1,
    min: 1,
    max: 10,
  },
};

const useStyles = makeStyles({
  question: {
    marginTop: 20,
  },
  slider: {
    width: 500,
  },
});

export default function Time(props) {
  const classes = useStyles();
  const [setTime, setSetTime] = useState(timings[props.medium].default);

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
      <Typography variant="h6" gutterBottom className={classes.question}>
        How much time do you have (in {timings[props.medium].unit})?
      </Typography>
      </Fade>
 
      <Slider
        className={classes.slider}
        defaultValue={timings[props.medium].default}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={timings[props.medium].step}
        marks
        min={timings[props.medium].min}
        max={timings[props.medium].max}
        onChange={(_, value) => setSetTime(value)}
      />
      <br />

      {setTime} {timings[props.medium].unit}
 
      <br />
      <br />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => props.fetchShows(setTime)}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Fetch Shows!
      </Button>
      

      <Typography variant="body2" className={classes.question}>
          3/3
        </Typography>

    </Grid>
  );
}
