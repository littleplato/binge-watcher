import React, { useState } from "react";
import MovieRow from "./MovieRow";
import TVRow from "./TVRow";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

// let suggestionList = []

let list = []

export default function Results(props) {
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
      <Button
          type="submit"
          variant="contained"
          color="primary"
          //   onClick={() => props.handleGenre()}
          startIcon={<AddIcon />}
        >
          Add Suggestions to Watchplan
        </Button>
        {list}
    </div>
  );
}
