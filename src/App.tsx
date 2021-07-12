import React from 'react';

import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import store from './store';

import Routes from './routes';
import GlobalStyles from './styles/global';
import client from './services/apollo';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
