import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  // InMemoryCache,
  // ApolloProvider,
  // useQuery,
  // gql
} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://flexible-hawk-64.hasura.app/v1/graphql'
  uri: 'http://react-todo-graphql.herokuapp.com/v1/graphql'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
