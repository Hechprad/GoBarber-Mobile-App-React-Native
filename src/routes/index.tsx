import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

import { Container, Loading } from './styles';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
