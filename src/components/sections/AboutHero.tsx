'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

export function AboutHero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Greeting */}
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            variants={fadeInUp}
          >
            {t('greeting', 'AboutPage.hero')}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            {t('name', 'AboutPage.hero')}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl lg:text-3xl font-semibold text-foreground mb-8"
            variants={fadeInUp}
          >
            {t('title', 'AboutPage.hero')}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            {t('description', 'AboutPage.hero')}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={stagger}
          >
            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('locationLabel', 'AboutPage.hero')}</h3>
              <p className="text-muted-foreground text-center">
                {t('location', 'AboutPage.hero')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('experienceLabel', 'AboutPage.hero')}</h3>
              <p className="text-muted-foreground text-center">
                {t('experience', 'AboutPage.hero')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('availabilityLabel', 'AboutPage.hero')}</h3>
              <p className="text-muted-foreground text-center">
                {t('availability', 'AboutPage.hero')}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 