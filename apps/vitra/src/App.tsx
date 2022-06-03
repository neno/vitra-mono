import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/client';
import { Layout } from 'ui';
import { ObjectsPage } from 'objects';
import { DesignersPage } from 'designers';
import { ManufacturersPage } from 'manufacturers';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout
        title='Vitra'
        routes={[
          {
            path: '/',
            element: ObjectsPage,
          },
          {
            path: '/designers',
            element: DesignersPage,
          },
          {
            path: '/manufacturers',
            element: ManufacturersPage,
          },
        ]}
        navLinks={[
          {
            label: 'Objects',
            path: '/',
          },
          {
            label: 'Designers',
            path: '/designers',
          },
          {
            label: 'Manufacturers',
            path: '/manufacturers',
          },
        ]}
      />
    </ApolloProvider>
  );
}

export default App;
