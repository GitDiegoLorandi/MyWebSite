'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/GitDiegoLorandi',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diego-lorandi02',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:contact@diegolorandi.dev',
    icon: Mail,
  },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="font-bold text-xl tracking-tight">
              Diego Lorandi
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Fullstack Developer specializing in modern web applications and remote collaboration.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Remote • Based in Brazil
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('about', 'Navigation')}
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('projects', 'Navigation')}
              </Link>

            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Diego Lorandi. {t('rights', 'Footer')}
            </div>
            <div className="text-xs text-muted-foreground">
              {t('builtWith', 'Footer')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 