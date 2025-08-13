'use client';

import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';

const ArchitectureSection = () => {
    const t = useTranslations('architecture');
    return (
        <section
            id="architecture"
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

export default ArchitectureSection;
