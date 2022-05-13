import React, { useState } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import PersonsList from './components/PersonsList';
import AddPerson from './components/AddPerson';


function App() {
  const client = new ApolloClient({
    //uri: process.env.REACT_APP_API_URL,
    uri: "http://localhost:6005",
    cache: new InMemoryCache(),
  });

//  console.log(`API URL ${process.env.REACT_APP_API_URL}`);
  
 const [load, SetLoad] = useState<boolean>(false);

  return (
    <ApolloProvider client={client}>
      <AddPerson setLoad={SetLoad} reload={load}/>
      <PersonsList reload={load}/>
      <div className="App"></div>
    </ApolloProvider>
    
  );
}

export default App;
