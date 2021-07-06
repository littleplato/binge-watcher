import React from "react";
import MovieRow from "./MovieRow";
import TVRow from "./TVRow";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// let suggestionList = []


let list = [];

const useStyles = makeStyles({
    btn: {
      marginBottom: 20,
    },
  });


export default function Results(props) {
    const classes = useStyles();

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

  return (
    <div>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={7}>
        {list}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        //   onClick={() => props.handleGenre()}
        startIcon={<AddIcon />}
        className={classes.btn}
        
      >
        Add Suggestions to Watchplan
      </Button >
        <Typography variant="h4">
            Statistics
        </Typography>
        <Typography variant="h6">
            Total Run Time: {props.medium ==="movie" ? `${Math.floor(props.runtime/60)} hours`: `${Math.floor(props.runtime/600)} days`} 
        </Typography>
        </Grid>
      </Grid>

      
      
    </div>
  );
}
