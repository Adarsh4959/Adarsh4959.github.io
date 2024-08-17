import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact'; // Ensure the correct import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Skill />
                <Experience />
                <Footer />
              </>
            }
          />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
