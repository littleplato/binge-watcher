import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

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
  const [setTime, setSetTime] = useState(15);

  return (
    <div>
      <Typography variant="h6" gutterBottom className={classes.question}>
        How much time do you have (in hours)?
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={15}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={5}
        max={40}
        onChange={(_, value) => setSetTime(value)}
      />
      <br />
      {setTime} hours
      <br />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => props.handleTime(setTime)}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Fetch Shows!
      </Button>
    </div>
  );
}
