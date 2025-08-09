import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="race-section bg-overlay-container relative overflow-hidden section-padding"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-about.jpg"
          alt="Background about"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto z-10 relative">
        <div className="space-y-6">
          <Header title={t('title')} badge={t('badge')} />
          <MarkdownText 
            variant="muted" 
            size="lg"
          >
            {t('paragraph')}
          </MarkdownText>
        </div>
      </div>
    </section>
  );
};

export default About;
