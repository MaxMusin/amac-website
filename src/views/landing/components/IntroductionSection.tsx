'use client';

import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';

const IntroductionSection = () => {
  const t = useTranslations('introduction');
  return (
    <section
      id="introduction"
      className="section-padding relative overflow-hidden bg-foreground"
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:w-[40%]">
          <Header title={t('title')} badge={t('badge')} />
          <MarkdownText size="lg">{t('paragraph')}</MarkdownText>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
