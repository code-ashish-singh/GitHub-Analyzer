import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import Preview from '../components/sections/Preview';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

/**
 * Landing page — assembles all marketing sections in order.
 * Layout chrome (Navbar, Footer) is applied at the route level.
 */
const LandingPage = () => (
  <>
    <Hero />
    <TrustedBy />
    <Features />
    <HowItWorks />
    <Preview />
    <Benefits />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

export default LandingPage;
