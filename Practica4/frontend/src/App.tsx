import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchAll from './components/SearchAll';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <SearchAll/>
    </div>
  );
}

export default App;
