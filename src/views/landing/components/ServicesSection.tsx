'use client';
import Header from '@/components/Header';
import { useTranslations } from 'next-intl';

const ServicesSection = () => {
  const t = useTranslations('services');

  const services = [
    {
      service: t('services.0.service'),
    },
    {
      service: t('services.1.service'),
    },
    {
      service: t('services.2.service'),
    },
    {
      service: t('services.3.service'),
    },
    {
      service: t('services.4.service'),
    },
    {
      service: t('services.5.service'),
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="container mx-auto relative z-10">
        <Header title={t('title')} badge={t('badge')} dark />
        <div className="prose max-w-none text-secondary text-lg">
          <ul className="list-disc text-md ml-6 mb-4">
            {services.map((service, index) => (
              <li key={index}>{service.service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
