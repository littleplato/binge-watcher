import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Intro from "../components/Intro";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import "../index.css"

const useStyles = makeStyles({
  title: {
    marginTop: 25,
  },
  btn: {
    marginLeft: 30,
  },
  bottom: {
    marginTop: 30,
    paddingBottom: 100
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className="HomeBG">
      <Container>
        <Grid container spacing={3} className={classes.bottom} style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={12} md={7}>
            <Container>
              <Typography variant="h4" className={classes.title} gutterBottom>
                Welcome to The Binge Watcher
              </Typography>
              <Typography gutterBottom>
                The Binge Watcher is an optimiser app for decision-paralyzed
                binge watchers. I help free more of your time to binge watch
                shows. All shows here only for flat-rate streaming services,
                such as Netflix and Disney Plus.
              </Typography>
              <Intro />
              <RouterLink to="/generate" style={{ textDecoration: "none" }}>
                <Button variant="outlined" className={classes.btn}>
                  Generate a Plan!
                </Button>
              </RouterLink>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={5}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
