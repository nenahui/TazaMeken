import { Home } from '@/pages/home/home';
import { Route } from 'react-router-dom';
import { Routes as RoutesReactRouter } from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <RoutesReactRouter>
      <Route path={'/'} element={<Home />} />
    </RoutesReactRouter>
  );
};
