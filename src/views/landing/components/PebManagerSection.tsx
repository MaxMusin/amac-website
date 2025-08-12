'use client';

import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';

const PebManagerSection = () => {
  const t = useTranslations('pebManager');
  return (
    <section
      id="pebManager"
      className="section-padding relative overflow-hidden bg-foreground"
    >
      <div className="container mx-auto relative z-10">
        <Header title={t('title')} badge={t('badge')} />
        <MarkdownText size="lg">
          {t('paragraph')}
        </MarkdownText>
      </div>
    </section>
  );
};

export default PebManagerSection;
