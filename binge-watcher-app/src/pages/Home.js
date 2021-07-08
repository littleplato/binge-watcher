import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Intro from "../components/Intro";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import CreateIcon from '@material-ui/icons/Create';
import Footer from "../components/Footer";

const useStyles = makeStyles({
  title: {
    marginTop: 25,
  },
  btn: {
    marginLeft: 30,
  },
  bottom: {
    marginTop: 30,
    paddingBottom: 10
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className="HomeBG">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Binge Watcher</title>
      </Helmet>
      <Container>
        <Grid container spacing={3} className={classes.bottom} style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={12} md={7}>
            <Container>
              <Typography variant="h4" className={classes.title} gutterBottom>
                Welcome to Binge Watcher
              </Typography>
              <Typography gutterBottom>
                Binge Watcher is an optimiser app for decision-paralyzed
                binge watchers. The app helps free more of your time to binge watch
                shows. All shows here only for flat-rate streaming services,
                such as Netflix and Disney Plus.
              </Typography>
              <Intro />
              <RouterLink to="/generate" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="large" className={classes.btn} startIcon={<CreateIcon />}>
                  Generate a Plan!
                </Button>
              </RouterLink>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={5}></Grid>
        </Grid>
        <Footer/>
      </Container>
    </div>
  );
}
