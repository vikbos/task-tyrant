import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DASHBOARD } from './navigation/navigators/types';
import { LandingScreenNavigator } from './navigation/navigators/LandingScreenNavigator/LandingScreenNavigator';
import { DashboardNavigator } from './navigation/navigators/DashboardNavigator/DashboardNavigator';
import { PrivateRoute } from './components/navigation/PrivateRoute';
import { lightTheme } from './theme';

const App: React.FC = () => {
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
