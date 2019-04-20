import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import PersistentDrawerLeft from "./Drawer";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    type: "dark"
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Press Start 2P", cursive'
  }
});
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <PersistentDrawerLeft />
  </ThemeProvider>
);

export default App;
