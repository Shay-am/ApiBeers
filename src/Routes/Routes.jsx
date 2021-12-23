import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Home } from '../Pages';

export const Switch = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
