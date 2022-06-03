import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    objects(limit: 10) {
      ObjObjectTitleTxt
    }
  }
`;
// const GET_CHARACTERS = gql`
//   query {
//     characters {
//       results {
//         id
//         name
//         image
//       }
//     }
//   }
// `;

const Characters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Characters;
