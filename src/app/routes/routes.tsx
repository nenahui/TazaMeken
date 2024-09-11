import React from 'react';
import { Route, Routes as RoutesReactRouter } from 'react-router-dom';
import { Home } from '../../pages/home/home';

export const Routes: React.FC = () => {
  return (
    <RoutesReactRouter>
      <Route path={'/'} element={<Home />} />
    </RoutesReactRouter>
  );
};
