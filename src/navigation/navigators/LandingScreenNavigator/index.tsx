import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ABOUT, AUTH } from '../types';
import { InfoScreen } from '../../screens/Landing/InfoScreen';
import { AboutScreen } from '../../screens/Landing/AboutScreen';
import { AuthNavigator } from '../AuthNavigator';
import { TopNav } from '../../../components/navigation/TopNav';

export const LandingScreenNavigator: React.FC = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route index element={<InfoScreen />} />
        <Route path={`/${ABOUT}`} element={<AboutScreen />} />
        <Route path={`/${AUTH}/*`} element={<AuthNavigator />} />
        {/* TODO */}
        {/* <Route path={`/${STATISTICS}`} element={} /> */}
        {/* <Route path={`/${USERS}`} element={} /> */}
      </Routes>
    </>
  );
};
