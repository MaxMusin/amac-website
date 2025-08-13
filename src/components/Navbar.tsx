'use client';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from '@/navigation';
import { scrollToAnchor } from '@/utils';
import { navLinks } from '@/utils/config';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check scroll position immediately on component mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (isHomePage) {
      // On home page, just scroll to the anchor
      scrollToAnchor(href);
    } else {
      // On other pages, navigate to home page with the anchor
      window.location.href = `/${href}`;
    }

    // Close the sheet after navigation
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-foreground backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Left side - Language Switcher */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Center - Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="relative h-10 w-40"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <Image
              src="/images/logo_amac_short.svg"
              alt="AMAC Logo"
              fill
              priority
              className="object-contain"
            />
          </a>
        </div>

        {/* Right side - Menu Sheet */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="text-muted uppercase flex flex-row items-center gap-2"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
              Menu
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-6">
              {navLinks(t).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground font-medium text-lg py-4 border-b border-border/50 transition-colors relative group"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-3 h-[2px] w-0 bg-racing-red transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#join"
                className="btn-primary mt-6"
                onClick={(e) => handleNavClick(e, '#join')}
              >
                {t('cta')}
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
