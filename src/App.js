/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
//import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
        isGrid={true}
      />
      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        isGrid={false}
      />
    </div>
  );
}

export default App;
