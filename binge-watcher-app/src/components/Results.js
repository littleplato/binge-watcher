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
import Fade from "@material-ui/core/Fade";
import { Link as RouterLink } from "react-router-dom";
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';

let list = [];

const useStyles = makeStyles({
  btn: {
    marginBottom: 40,
  },
  rightGrid: {
    marginLeft: 1,
  },
  title: {
    marginBottom: 30,
  },
  linkOut: {
    marginLeft: 10,
  },
  statsBody: {
    marginBottom: 20,
  }
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

  const handleAdd = () => {
    setButtonState({ text: "Added!", disabled: true });
    props.saveWatchplan({suggestions: props.suggestions, medium: props.medium, runtime: props.runtime})
  };

  return (
    <div>
      <Box m={1} pt={3} pb={3}>
        <Typography variant="h5">
          {props.status}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          {list}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Container>
          <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
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
            </Fade>

            <Fade in={true} timeout={1000}>
            <Typography variant="h4" gutterBottom>
              Statistics
            </Typography>
            </Fade>
            <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <div className={classes.statsBody}>
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
            </div></Fade>
            <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <RouterLink to="/watchplan" style={{ textDecoration: "none", color: "black" }} >
            <Button
              variant="contained"
              color="inherit"
              startIcon={<ListIcon />}
              size="small"
              
            >
              Visit Watchplan
            </Button></RouterLink></Fade>
            <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <RouterLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<CreateIcon />}
              size="small"
              className={classes.linkOut}
            >
              Make New Plan
            </Button></RouterLink></Fade>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
