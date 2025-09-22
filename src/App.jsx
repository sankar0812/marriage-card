import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
// import CountdownSection from './components/Countdown';
import AboutUs from './components/AboutUs';
import VenueDetails from './components/VenueDetails';
import Gallery from './components/Gallery';
import MapAndLocation from './components/MapAndLocation'; // Import the new component
import Footer from './components/Footer';
import VideoSection  from './components/VideoSection';
import TimelineSection from './components/TimelineSection';
import QuotesSection from './components/QuotesSection';

function App() {
  return (
    <div className="font-sans bg-background text-gray-800 antialiased">
      <main>
        <Hero />
        <Countdown weddingDate="2025-10-26T14:00:00" />
        {/* <CountdownSection /> */}
        <QuotesSection />
        <AboutUs />
        <Gallery />
        <VideoSection />
        <TimelineSection />
        <VenueDetails />
        <MapAndLocation />
      </main>
      <Footer />
    </div>
  );
}

export default App;