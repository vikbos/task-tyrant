import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { SignUp } from '../../screens/Auth/SignUp';
import { Login } from '../../screens/Auth/Login';
import { LOGIN, SIGNUP } from '../types';

export const AuthNavigator = () => {
  return (
    <Routes>
      <Route path={`/${LOGIN}`} element={<Login />} />
      <Route path={`/${SIGNUP}`} element={<SignUp />} />
    </Routes>
  );
};
