import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bottleneck from './components/Bottleneck';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Authority from './components/Authority';
import Results from './components/Results';
import HowItWorks from './components/HowItWorks';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AuditOffer from './components/AuditOffer';
import ClosingCTA from './components/ClosingCTA';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {showBackground && <AnimatedBackground />}
      <div className="relative z-30">
        <Header />
        <Hero />
        <Bottleneck />
        <About />
        <Services />
        <Pricing />
        <Authority />
        <Results />
        <HowItWorks />
        <Blog />
        <Contact />
        <AuditOffer />
        <ClosingCTA />
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}

export default App;
