'use client';

import { useTranslations } from 'next-intl';

const StepsSection = () => {
  const t = useTranslations('steps');

  const steps = [
    {
      title: t('steps.0.step'),
    },
    {
      title: t('steps.1.step'),
    },
    {
      title: t('steps.2.step'),
    },
  ];

  return (
    <section
      id="steps"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Image - 50% width */}
      <div 
        className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-cover bg-center bg-no-repeat opacity-10 lg:opacity-100"
        style={{
          backgroundImage: "url('/images/steps.png')"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps Side */}
          <div className="order-1 lg:order-2 lg:col-start-2">
            <h2 className="text-2xl font-medium text-foreground">
              {t('title')}
            </h2>
            <div className="prose max-w-none text-secondary text-lg">
              <ul className="list-disc text-md ml-6 mb-4">
                {steps.map((step, index) => (
                  <li key={index}>{step.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
