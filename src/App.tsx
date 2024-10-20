import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import Hiring from './components/Hiring';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <About />
      <Hiring />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;