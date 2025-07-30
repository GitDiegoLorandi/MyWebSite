'use client';

import Link from 'next/link';
import { ArrowLeft, Home, FolderOpen, Mail } from 'lucide-react';
import { useLanguage } from '../lib/language-context';
import { translations } from '../lib/translations';

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language].NotFound;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Large Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 bg-clip-text leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <Home size={20} />
              {t.homeButton}
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <FolderOpen size={20} />
              {t.projectsButton}
            </Link>


          </div>

          {/* Decorative Elements */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 blur-3xl"></div>
            </div>
            
            {/* Navigation Hint */}
            <div className="relative z-10 text-sm text-slate-400 dark:text-slate-500">
              <p>Use the navigation above or click one of the buttons to continue exploring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}