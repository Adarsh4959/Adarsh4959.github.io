// src/App.js
import React from 'react';
import Header from './components/Header'; // Ensure this path is correct
import './App.css'; // Import your consolidated styles
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Experience from './components/Experience';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <Experience />
      <Footer />
      <main>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </main>
    </div>
  );
}

export default App;
