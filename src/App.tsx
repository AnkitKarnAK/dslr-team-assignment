import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { themeOptions } from "theme/mui-theme-styles";
import "./App.scss";
import { Route, Routes } from "react-router";
import Collections from "pages/Collections";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  if (!appIsReady) return null;

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Routes>
        <Route path="/" element={<Collections />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
