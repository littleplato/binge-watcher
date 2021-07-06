import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  question: {
    marginTop: 20,
  },
  radio: {
    marginBottom: 10,
    display: "block",
  },
});

let choice = ""

export default function Medium(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom className={classes.question}>
        What is your preferred medium?
      </Typography>

      <FormControl className={classes.radio}>
        <RadioGroup
          onChange={(event) => choice = event.target.value}
          row
        >
          <FormControlLabel value="movie" control={<Radio />} label="Movies" />
          <FormControlLabel value="tv" control={<Radio />} label="TV Series" />
        </RadioGroup>
      </FormControl>

      <Button
        // className={classes.btn}
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => props.handleMedium(choice)}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Next
      </Button>
    </>
  );
}
