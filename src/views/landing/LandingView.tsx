import AboutSection from './components/AboutSection';
import ArchitectureSection from './components/ArchitectureSection';
import ConsultingSection from './components/ConsultingSection';
import ContactSection from './components/ContactSection';
import PebCertificateSection from './components/PebCertificateSection';
import PebManagerSection from './components/PebManagerSection';
import StepsSection from './components/StepsSection';

const LandingView = () => {
  return (
    <div>
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
