import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Generate from "./pages/Generate";
import Watchplan from "./pages/Watchplan";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  // },
  typography: {
    fontFamily: "Alegreya Sans",
		fontWeightLight: 300,
		fontWeightRegular: 500,
		fontWeightMedium: 700,
		fontWeightBold: 900,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
