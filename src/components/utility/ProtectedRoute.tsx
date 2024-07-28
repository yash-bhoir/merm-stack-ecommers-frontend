// src/components/utility/ProtectedLayout.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedLayout: React.FC = () => {
  const token = Cookies.get('accessToken');

  console.log("Token:", token);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
