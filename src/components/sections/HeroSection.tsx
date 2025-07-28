'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/language-context';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};



const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-12 px-4 sm:px-6 lg:px-8 home-office-gradient">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-lg text-muted-foreground font-medium">
                {t('greeting', 'HeroSection')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('name', 'HeroSection')}
              </h1>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                {t('title', 'HeroSection')}
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                {t('subtitle', 'HeroSection')}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t('description', 'HeroSection')}
            </motion.p>

            {/* Stats/Info */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {t('location', 'HeroSection')}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                {t('experience', 'HeroSection')}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                {t('availability', 'HeroSection')}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
              >
                {t('cta', 'HeroSection')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
              >
                {t('ctaSecondary', 'HeroSection')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Photo/Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border/50 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/30 flex items-center justify-center">
                    <Briefcase className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Professional Photo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Coming Soon
                  </p>
                </div>
              </div>

              {/* Floating elements for home office aesthetic */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-10, 10, -10] }}
                transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              />
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [10, -10, 10] }}
                transition={shouldReduceMotion ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 