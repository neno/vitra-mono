import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MANUFACTURERS = gql`
  query {
    people(query: { PerTypeVoc: "Produzent" }, limit: 10) {
      PerNameTxt
    }
  }
`;

export const ManufacturersPage = () => {
  const { error, loading, data } = useQuery(GET_MANUFACTURERS);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
