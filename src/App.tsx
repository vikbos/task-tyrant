import React from "react";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DASHBOARD } from "./navigation/navigators/types";
import { LandingScreenNavigator } from "./navigation/navigators/LandingScreenNavigator";
import { DashboardNavigator } from "./navigation/navigators/DashboardNavigator";
import { PrivateRoute } from "./components/navigation/PrivateRoute";
import { lightTheme } from "./theme";

const App: React.FC = () => {
  console.log("test");
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ThemeProvider theme={lightTheme}>
            <LandingScreenNavigator />
          </ThemeProvider>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route
          path={`/${DASHBOARD}/*`}
          element={
            <ThemeProvider theme={lightTheme}>
              <DashboardNavigator />
            </ThemeProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
