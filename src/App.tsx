import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import {routes} from './helpers/routes';
import Posts from './pages/Posts';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path={routes.auth} element={<Auth />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.profile} element={<Profile />} />
      {/*<Route path={routes.barman} element={<Barman />} />*/}
      {/*<Route path={routes.driver} element={<DriverContainer />} />*/}
      <Route path="*" element={<Auth />} />
    </Routes>
  );
}

export default App;
