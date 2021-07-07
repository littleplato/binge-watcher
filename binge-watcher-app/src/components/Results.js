import React, { useState } from "react";
import MovieRow from "./MovieRow";
import TVRow from "./TVRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

let list = [];
let totalPlanList = []

const useStyles = makeStyles({
  btn: {
    marginBottom: 20,
  },
  rightGrid: {
    marginLeft: 1,
  },
  title: {
    marginBottom: 30,
  },
});

export default function Results(props) {
  const classes = useStyles();
  const [buttonState, setButtonState] = useState({
    text: "Add to Watchplan",
    disabled: false,
  });

  if (props.medium === "movie") {
    list = props.suggestions.map((suggestion) => (
      <>
        <MovieRow data={suggestion} />
      </>
    ));
  } else if (props.medium === "tv") {
    list = props.suggestions.map((suggestion) => (
      <>
        <TVRow data={suggestion} />
      </>
    ));
  }

  // totalPlanList= props.trashedList

  const handleAdd = () => {
    setButtonState({ text: "Added!", disabled: true });
    totalPlanList.unshift({suggestions: props.suggestions, medium: props.medium, runtime: props.runtime})
    console.log("totalPlanList", totalPlanList)
    props.savePlan(totalPlanList);
  };

  return (
    <div>
      <Box m={1} pt={3} pb={3}>
        <Typography variant="h5">
          We have constructed a watchplan for you!
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          {list}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Container>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleAdd}
              startIcon={<AddIcon />}
              className={classes.btn}
              disabled={buttonState.disabled}
            >
              {buttonState.text}
            </Button>

            <Typography variant="h4" gutterBottom>
              Statistics
            </Typography>
            <Typography variant="subtitle1">
              Show Type: {props.medium === "movie" ? "Movies" : "TV Series"}
              <br />
              {props.medium === "movie"
                ? `Number of Films: ${props.suggestions.length}`
                : `Number of Shows: ${props.suggestions.length}`}
            </Typography>
            <Typography variant="h6">
              Total Runtime:{" "}
              {props.medium === "movie"
                ? `${Math.floor(props.runtime / 60)} hours`
                : `${Math.floor(props.runtime / 720)} days`}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
