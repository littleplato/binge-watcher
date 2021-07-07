import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    marginTop: 25,
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "30vh" }}
    >
      <Typography variant="h6">Hey there!</Typography>
      <Typography>
        Thanks for your interest in contacting me. 
        However, I am not interested in being contacted.
      </Typography>
      <RouterLink to="/generate" style={{ textDecoration: "none" }}>
        <Button variant="outlined" className={classes.btn}>
          Generate a Plan Instead
        </Button>
      </RouterLink>
    </Grid>
  );
}
