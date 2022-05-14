import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery } from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetTasks from "./components/GetTasks";
import Form from "./components/Form";


/**
 * catch error and how to response them.
 * @type {ApolloLink}
 */
const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
/**
 * The actual http link to our server
 * @type {ApolloLink}
 */
const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:6969/graphql"})
]);
/**
 * Instance of the apollo client so that ew know
 * if we have a connection or not.
 * @type {ApolloClient<unknown>}
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});



function App() {
  return (
      <ApolloProvider client={client}>
        <div className="container">
           <Form />
           <GetTasks />
        </div>
      </ApolloProvider>
  );
}

export default App;
