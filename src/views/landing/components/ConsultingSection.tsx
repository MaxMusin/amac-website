'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';

const ConsultingSection = () => {
  const t = useTranslations('consulting');
  return (
    <section
      id="consulting"
      className="section-padding relative overflow-hidden bg-foreground"
    >
      <div className="container mx-auto relative z-10">
        <Header title={t('title')} badge={t('badge')} />
        <MarkdownText 
            size="lg"
          >
            {t('paragraph')}
          </MarkdownText>
      </div>
    </section>
  );
};

export default ConsultingSection;
