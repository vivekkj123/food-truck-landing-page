import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/source-sans-pro";
import "@fontsource/open-sans";
import "@fontsource/poppins";
const theme = extendTheme({
  colors: {
    primary: "#E23744",
    secondary: "#0E2368",
    white: "#ffffff",
    textSecondary: '#444957'
  },
  fonts: {
    sourceSans: `'Source Sans Pro', sans-serif`,
    openSans: `'Open Sans', sans-serif`,
    poppins: `'Poppins', sans-serif`,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
