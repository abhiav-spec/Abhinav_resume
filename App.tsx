import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}

export default App;