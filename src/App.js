import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import ProducersSection from './components/ProdecersSection';
import ProcessSection from './components/ProcessSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProducersSection/>
      <ProcessSection/>
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
