import theme from "mdx-deck/themes";
import { grey } from "@material-ui/core/colors";

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  //   font: "'Press Start 2P', sans-serif",
  // custom colors
  colors: {
    text: "#fff",
    background: grey[800],
    link: "#007eb9"
  }
};
