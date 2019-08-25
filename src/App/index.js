import React from 'react';
import Header from '../Header';
import About from '../About';
import Blog from '../Blog';
import Contact from '../Contact';
import Gallery from '../Gallery';
import Home from '../Home';
import Services from '../Services';
import Subscribe from '../Subscribe';

function App() {
  return (
    <div className="app">
     <Header />
     <Home />
     <About />
     <Services  />
     <Gallery />
     <Subscribe />
     <Blog />
     <Contact />

    </div>
  );
}

export default App;
