'use client';

import { type Locale } from '@/i18n/i18n';
import { usePathname, useRouter } from '@/navigation';
import { saveLanguagePreference } from '@/utils/languageDetection';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { cn } from '@/utils';

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const locale = currentLocale as Locale; // Cast to our Locale type
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale || isPending) return;
    
    // Save the user's language preference
    saveLanguagePreference(newLocale);

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="navbar-language-switcher flex items-center gap-1 text-sm uppercase">
      <button
        onClick={() => handleLocaleChange('fr')}
        className={cn(
          "transition-all duration-200 cursor-pointer text-muted",
          locale === 'fr' 
            ? "font-semibold" 
            : ""
        )}
        disabled={isPending}
      >
        FRA
      </button>
      <span className="text-muted">/</span>
      <button
        onClick={() => handleLocaleChange('en')}
        className={cn(
          "transition-all duration-200 cursor-pointer text-muted",
          locale === 'en' 
            ? "font-semibold" 
            : ""
        )}
        disabled={isPending}
      >
        ENG
      </button>
    </div>
  );
}
