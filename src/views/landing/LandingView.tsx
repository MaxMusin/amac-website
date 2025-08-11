import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ConsultingSection from './components/ConsultingSection';
import PebSection from './components/PebSection';

const LandingView = () => {
  return (
    <div>
      <PebSection />
      <ConsultingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingView;
