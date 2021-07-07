import React, { useState } from "react";
import MovieRow from "../components/MovieRow";
import TVRow from "../components/TVRow";
// import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WatchplanRow from "../components/WatchplanRow"

let list = [];
let listTotal = []
// const useStyles = makeStyles({
//     btn: {
//       marginBottom: 20,
//     },
//   });


export default function Watchplan(props) {
  // const classes = useStyles();
  const [showPlan, setShowPlan] = useState(false)

  const selectPlan = () => {
    console.log("selectPlan clicked")
    setShowPlan(!showPlan)
}

  if (props.medium === "movie") {
    list = props.watchplan.map((suggestion) => (
      <>
        <MovieRow data={suggestion} />
      </>
    ));
  } else if (props.medium === "tv") {
    list = props.watchplan.map((suggestion) => (
      <>
        <TVRow data={suggestion} />
      </>
    ));
  }

//   listTotal.push([])
//   let plans = listTotal.map(item => <WatchplanRow />)

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
        <WatchplanRow selectPlan={selectPlan}/>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
        { showPlan ? list : ""}
        </Grid>
      </Grid>
    </Container>
  );
}
