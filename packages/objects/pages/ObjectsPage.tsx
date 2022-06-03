import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_OBJECTS = gql`
  query {
    objects(limit: 10) {
      ObjObjectTitleTxt
    }
  }
`;

export const ObjectsPage = () => {
  const { error, loading, data } = useQuery(GET_OBJECTS);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
