import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;