import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AboutUs from './components/AboutUs';
import VenueDetails from './components/VenueDetails';
import Gallery from './components/Gallery';
import MapAndLocation from './components/MapAndLocation'; // Import the new component
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-background text-gray-800 antialiased">
      <main>
        <Hero />
        <Countdown weddingDate="2025-10-26T14:00:00" />
        <AboutUs />
        <VenueDetails />
        <Gallery />
        <MapAndLocation />
      </main>
      <Footer />
    </div>
  );
}

export default App;