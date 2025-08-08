'use client';

import { Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-white pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="md:col-span-1">
            <p className="text-muted-foreground mb-2 md:mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/amac.agency"
                className="text-muted-foreground hover:text-racing-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[180px] h-[130px]">
              <Image
                src="/images/logo_amac.png"
                alt={t('logoAlt')}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              {t('copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
