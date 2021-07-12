import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => ({
    headers: {
      'x-hasura-admin-secret': 'fliperdevtest2020',
      ...headers,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
