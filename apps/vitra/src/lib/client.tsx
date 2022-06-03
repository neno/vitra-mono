import * as Realm from 'realm-web';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const APP_ID = 'vitragraphql-ohrfy';
const realmApp = new Realm.App(APP_ID);

async function getValidAccessToken() {
  if (!realmApp.currentUser) {
    await realmApp.logIn(Realm.Credentials.anonymous());
  } else {
    await realmApp.currentUser.refreshAccessToken();
  }

  return realmApp.currentUser?.accessToken;
}

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    fetch: async (uri: string, options: any) => {
      const accessToken = await getValidAccessToken();
      console.log('accessToken', accessToken);

      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});
