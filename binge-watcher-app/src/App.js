import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Generate from "./pages/Generate";
import Watchplan from "./pages/Watchplan";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  // },
  typography: {
    fontFamily: "Alegreya Sans",
		fontWeightLight: 100,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
  }
});

const useStyles = makeStyles({
  toolbar: {
    marginTop: 80,
  },
  logo : {
    flexGrow: 1
  },
  link: {
    marginRight: 20
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.logo}>
            The Binge Watcher
          </Typography>
          <Typography className={classes.link}>
            Generate Plan
          </Typography>
          <Typography className={classes.link}>
            Watchplan
          </Typography>
          <Typography>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbar}></div>
      <Switch>
        <Route exact path="/">
          <Generate />
        </Route>
        <Route exact path="/watchplan">
          <Watchplan />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
