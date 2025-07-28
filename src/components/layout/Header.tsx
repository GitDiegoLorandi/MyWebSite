'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors"
          >
            <div className="font-bold text-xl tracking-tight">
              Diego Lorandi
            </div>
          </Link>
        </div>

        {/* Desktop Navigation & Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <Navigation />
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Navigation />
        </div>
      </div>
    </header>
  );
} 