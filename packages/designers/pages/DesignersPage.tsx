import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DESIGNERS = gql`
  query {
    people(query: { PerTypeVoc: "Designer" }, limit: 10) {
      PerNameTxt
    }
  }
`;

export const DesignersPage = () => {
  const { error, loading, data } = useQuery(GET_DESIGNERS);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
