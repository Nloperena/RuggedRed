import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SplitView from './pages/SplitView';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/split-view" element={<SplitView />} />
    </RouterRoutes>
  );
};

export default Routes; 