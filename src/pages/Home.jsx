import Hero from '../sections/Hero';
import Services from './Services';
import PortfolioIntro from '../components/PortfolioIntro';
import AboutTeaser from '../components/AboutTeaser';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import InstagramFeed from '../components/InstagramFeed';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioIntro />
      <AboutTeaser />
      <Testimonials />
      <WhyChooseUs />
      <InstagramFeed />
      <CallToAction />
    </>
  );
}