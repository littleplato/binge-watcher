import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Generate from "./pages/Generate";
import Watchplan from "./pages/Watchplan";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Contact from "./pages/Contact";
import { Link } from "@material-ui/core";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Container } from "@material-ui/core";
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

let testWatchPlan = [{
  suggestions: [],
  medium: "none"
}]

function App() {
  const classes = useStyles();
  const [watchplanList, setWatchplanList] = useState([{
    suggestions: [],
    medium: "none"
  }]);
  const [mediumSelect, setMediumSelect] = useState("");

  const trash = (newList) => {
    setWatchplanList(newList)
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
            watchplan={(input) => setWatchplanList(input)}
            // watchplan={(input) => testWatchPlan = input}
            medium={(input) => setMediumSelect(input)}
          />
        </Route>
        <Route exact path="/watchplan">
          <Watchplan watchplan={watchplanList} medium={mediumSelect} trash={trash}/>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
      {/* <Footer/> */}
    </ThemeProvider>
  );
}

export default App;
