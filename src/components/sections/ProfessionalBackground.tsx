'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

export function ProfessionalBackground() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  // Get background items from translations
  const backgroundData = t('items', 'AboutPage.background') as unknown;
  const backgroundItems = Array.isArray(backgroundData) 
    ? (backgroundData as Array<{
        period: string;
        role: string;
        company: string;
        description: string;
      }>)
    : [];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('title', 'AboutPage.background')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description', 'AboutPage.background')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {backgroundItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center gap-6"
                  variants={fadeInUp}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-4 border-primary/20 relative z-10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 md:p-8 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional info */}
          <motion.div
            className="mt-16 p-6 md:p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-xl"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('remoteWorkTitle', 'AboutPage.background')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('remoteWorkDescription', 'AboutPage.background')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 