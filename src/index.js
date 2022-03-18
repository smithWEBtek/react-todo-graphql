import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://flexible-hawk-64.hasura.app/v1/graphql',
  // uri: 'http://react-todo-graphql.herokuapp.com/v1/graphql',
  uri: 'https://todos-graphql.herokuapp.com/',
  cache: new InMemoryCache({
    addTypename: true,
    resultCaching: true,
  })
});

let todos;
const getTodos = async () => {
  client.query({
    query: gql`
    query {
      getTodos {
        id
        text
        done
      }
    }
  `
  })
    // .then(result => {
    .then(result => console.log('result: ', result.data.getTodos));
}

getTodos();

ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />
  </React.StrictMode>,
  document.getElementById('root')
);
