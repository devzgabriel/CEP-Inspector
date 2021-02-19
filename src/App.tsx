import React, { useContext } from "react";
import Routes from "./routes";
import { AppContext } from "./context/AppContext";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";

function App() {
  const {
    state: { theme },
  } = useContext(AppContext);

  const actualTheme = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={actualTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
