import AboutSection from './components/AboutSection';
import ConsultingSection from './components/ConsultingSection';
import ContactSection from './components/ContactSection';
import PebCertificateSection from './components/PebCertificateSection';
import PebManagerSection from './components/PebManagerSection';

const LandingView = () => {
  return (
    <div>
      <PebManagerSection />
      <PebCertificateSection />
      <ConsultingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingView;
