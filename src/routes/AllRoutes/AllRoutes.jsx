import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from '../RequireAuth/RequireAuth.redux';

import LoginPage from '../../components/views/LoginPage/LoginPage';
import SignUpPage from '../../components/views/SignUpPage/SignUpPage';
import Dashboard from '../../components/views/Dashboard/Dashboard.redux';
import About from '../../components/views/About/About';
import Auth from '../../components/views/Auth/Auth.redux';
import Category from '../../components/views/Category/Category.redux';
import Task from '../../components/views/Task/Task.redux';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="about" element={<About />} />
      <Route
        path="dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="category"
        element={
          <RequireAuth>
            <Category />
          </RequireAuth>
        }
      />
      <Route
        path="task"
        element={
          <RequireAuth>
            <Task />
          </RequireAuth>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
