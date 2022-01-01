import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Home, Favorite } from 'Pages';
import { PrivateRoutes } from './PrivateRoutes';

export const Switch = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/favorite"
        element={
          <PrivateRoutes>
            <Favorite />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
