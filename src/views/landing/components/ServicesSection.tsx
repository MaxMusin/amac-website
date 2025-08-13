'use client';

import Header from '@/components/Header';
import MarkdownText from '@/components/MarkdownText';
import { useTranslations } from 'next-intl';

const ServicesSection = () => {
    const t = useTranslations('services');
    return (
        <section
            id="services"
            className="section-padding relative overflow-hidden bg-background"
        >
            <div className="container mx-auto relative z-10">
                <Header title={t('title')} badge={t('badge')} dark />
                <MarkdownText size="lg" variant="muted" >
                    {t('paragraph')}
                </MarkdownText>
            </div>
        </section>
    );
};

export default ServicesSection;
