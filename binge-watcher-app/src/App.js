import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Generate from "./pages/Generate";
import Watchplan from "./pages/Watchplan";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Contact from "./pages/Contact";
import { Link } from "@material-ui/core";
import Home from "./pages/Home";
import Container from "@material-ui/core/Container";
import "./index.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
  typography: {
    fontFamily: "Alegreya Sans",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles({
  toolbar: {
    marginTop: 63,
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    marginRight: 20,
  },
});

function App() {
  const classes = useStyles();
  const [newWatchplan, setNewWatchplan] = useState([])

  const trash = (newList) => {
    setNewWatchplan(newList)
    console.log(newWatchplan)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h5" className={classes.logo}>
            <Link component={RouterLink} color="inherit" to="/" style={{ textDecoration: 'none' }}>
              Binge Watcher
            </Link>
          </Typography>
          <Typography className={classes.link}>
            <Link component={RouterLink} color="inherit" to="/generate" style={{ textDecoration: 'none' }} >
              Generate Plan
            </Link>
          </Typography>
          <Typography className={classes.link}>
            <Link component={RouterLink} color="inherit" to="/watchplan" style={{ textDecoration: 'none' }}>
              Watchplan
            </Link>
          </Typography>
          <Typography>
            <Link component={RouterLink} color="inherit" to="/contact" style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>

      <div className={classes.toolbar}></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/generate">
          <Generate
            saveWatchplan={(input) => setNewWatchplan([input, ...newWatchplan])}
          />
        </Route>
        <Route exact path="/watchplan">
          <Watchplan trash={trash} newWatchplan={newWatchplan} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
