import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/cards/Card';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
