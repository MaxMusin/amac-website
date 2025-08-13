import AboutSection from './components/AboutSection';
import ArchitectureSection from './components/ArchitectureSection';
import ConsultingSection from './components/ConsultingSection';
import ContactSection from './components/ContactSection';
import IntroductionSection from './components/IntroductionSection';
import PebCertificateSection from './components/PebCertificateSection';
import PebManagerSection from './components/PebManagerSection';
import ServicesSection from './components/ServicesSection';
import StepsSection from './components/StepsSection';

const LandingView = () => {
  return (
    <div>
      <IntroductionSection />
      <ServicesSection />
      <ArchitectureSection />
      <StepsSection />
      <PebManagerSection />
      <PebCertificateSection />
      <ConsultingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingView;
