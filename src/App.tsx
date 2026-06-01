import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './sections/AboutSection';
import EcosystemSection from './sections/EcosystemSection';
import ImpactSection from './sections/ImpactSection';
import PartnershipsSection from './sections/PartnershipsSection';
import ExpansionSection from './sections/ExpansionSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen font-primary">
      <Header />

      <main>
        <HeroSection
          id="home"
          image="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1600"
          label="neweragroup-eg.com"
          title="Building the Future of Education, Communities &"
          titleHighlight="Youth Development"
          subtitle="New Era Group is a future-focused investment and development platform creating integrated ecosystems where education, lifestyle, sports, and community come together to shape the next generation."
          ctaText="Explore Our Ecosystem"
          ctaHref="#ecosystem"
          secondaryCtaText="Our Vision"
          secondaryCtaHref="#about"
          height="full"
          overlay="gradient"
          showScroll
        />

        <AboutSection />

        <EcosystemSection />

        <ImpactSection />

        <PartnershipsSection />

        <ExpansionSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
