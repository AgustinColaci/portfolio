import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="projects" className="min-h-screen py-20 bg-gray-100">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;