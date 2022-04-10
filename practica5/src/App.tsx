import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Characters from './components/characters';
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
       <div className="App">
        <Characters/>
       </div>
    </ApolloProvider>
   
  );
}

export default App;
