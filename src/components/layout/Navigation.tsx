'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

const navigationItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' },
] as const;

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`relative ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              isActive(item.href)
                ? 'text-foreground'
                : 'text-foreground/60'
            }`}
          >
            {t(item.key, 'Navigation')}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground/60 hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-background border rounded-md shadow-lg z-50 md:hidden">
          <div className="py-1">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${
                  isActive(item.href)
                    ? 'text-foreground bg-accent/50'
                    : 'text-foreground/80'
                }`}
              >
                {t(item.key, 'Navigation')}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 