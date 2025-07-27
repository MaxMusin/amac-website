'use client';

import { Facebook, Instagram } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-white pt-16 pb-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-2 md:mb-6">
              <div className="relative h-10 w-40">
                <Image
                  src="/images/auriga_racing__logo.svg"
                  alt={t('logoAlt')}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-2 md:mb-6">
              {t('tagline')}
              <br />
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/auriga.racing.team"
                className="text-muted-foreground hover:text-racing-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/aurigaracing/"
                className="text-muted-foreground hover:text-racing-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@aurigaracing/"
                className="text-muted-foreground hover:text-racing-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div></div>
          <div></div>
          <div>
            <h3 className="text-lg font-bold mb-2 md:mb-6">
              {t('quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.trackdays')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#teams"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.teams')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.gallery')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#join"
                  className="text-muted-foreground hover:text-racing-red transition-colors"
                >
                  {t('quickLinks.joinUs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms-of-sale"
                className="text-sm text-muted-foreground hover:text-racing-red transition-colors"
              >
                {t('legalLinks.termsOfSale')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
