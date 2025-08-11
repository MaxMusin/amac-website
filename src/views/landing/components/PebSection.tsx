'use client';

import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';

const PebSection = () => {
  const t = useTranslations('peb');
  return (
    <section
      id="peb"
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="container mx-auto relative z-10">
        <Header title={t('title')} badge={t('badge')} dark />
        <MarkdownText variant="muted" size="lg">{t('paragraph')}</MarkdownText>
      </div>
    </section>
  );
};

export default PebSection;
